/**
 * AcidSquares - WebGL Background  |  MacroBox Portfolio
 * Palette: Forest Green #2C4A3B · Umber #6B4F30 · Burnt Sienna #c5523f · Parchment #DFC09A
 */
(function () {
  "use strict";

  var VS = "attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.0,1.0);}";

  var FS_PARTS = [
    "precision highp float;",
    "uniform float u_time;",
    "uniform vec2 u_resolution;",
    "uniform vec2 u_mouse;",
    "uniform float u_opacity;",
    "uniform float u_ms;",
    "uniform float u_mr;",

    "float h21(vec2 p){",
    "  p=fract(p*vec2(234.34,435.345));",
    "  p+=dot(p,p+34.23);",
    "  return fract(p.x*p.y);",
    "}",

    "vec3 pal(float t){",
    "  vec3 c0=vec3(0.172,0.290,0.231);",   // #2C4A3B forest green
    "  vec3 c1=vec3(0.420,0.310,0.188);",   // warm umber
    "  vec3 c2=vec3(0.773,0.322,0.247);",   // #c5523f burnt sienna
    "  vec3 c3=vec3(0.875,0.753,0.604);",   // parchment gold
    "  float s=fract(t);",
    "  if(s<0.333)return mix(c0,c1,s/0.333);",
    "  if(s<0.667)return mix(c1,c2,(s-0.333)/0.334);",
    "  return mix(c2,c3,(s-0.667)/0.333);",
    "}",

    "void main(){",
    "  vec2 uv=gl_FragCoord.xy/u_resolution;",
    "  vec2 st=uv*2.0-1.0;",
    "  st.x*=u_resolution.x/u_resolution.y;",
    "  float T=u_time*0.35;",

    // mouse ripple
    "  vec2 m=u_mouse*2.0-1.0;",
    "  m.x*=u_resolution.x/u_resolution.y;",
    "  float md=length(st-m);",
    "  float rip=sin(md*10.0-T*4.0)*exp(-md*3.5)*u_ms*smoothstep(u_mr*2.5,0.0,md);",

    // grid coords
    "  float den=13.5,zm=1.3;",
    "  vec2 p0=st*den/zm;",

    // warp pass 1
    "  vec2 w1;",
    "  w1.x=sin(p0.y*0.8+T)*0.6+sin(p0.y*0.35-T*0.6)*0.25;",
    "  w1.y=cos(p0.x*0.8+T*0.7)*0.6+cos(p0.x*0.35+T*0.4)*0.25;",
    "  w1*=0.7;",

    // warp pass 2
    "  vec2 p1=p0+w1,w2;",
    "  w2.x=sin(p1.y*0.5+T*1.3+1.5)*0.35;",
    "  w2.y=cos(p1.x*0.5-T*0.9+0.8)*0.35;",
    "  w2*=0.7;",

    "  vec2 pos=p0+w1+w2+st*rip;",
    "  vec2 cell=floor(pos);",
    "  vec2 cv=fract(pos)-0.5;",

    "  float hv=h21(cell);",
    "  float an=fract(hv+T*0.22+sin(T*0.5+hv*6.2832)*0.1);",

    // square SDF
    "  float sz=0.43;",
    "  vec2 dv=abs(cv)-sz;",
    "  float sdf=length(max(dv,0.0))+min(max(dv.x,dv.y),0.0);",

    "  float fill=1.0-smoothstep(-0.01,0.025,sdf);",
    "  float glow=exp(-max(sdf,0.0)*4.5)*0.8;",
    "  float shine=smoothstep(-0.05,-0.38,cv.x+cv.y)*fill*0.35;",

    "  vec3 col=pal(an);",
    "  vec3 gc=mix(col,vec3(0.965,0.953,0.925),0.35);",
    "  vec3 color=col*fill+gc*glow+vec3(1.0)*shine;",

    // vignette
    "  float vig=1.0-smoothstep(0.35,1.45,length(st*vec2(0.75,1.0)));",
    "  color*=vig;",

    // grain
    "  float gr=(h21(gl_FragCoord.xy+vec2(u_time*137.0))-0.5)*0.05;",
    "  color=clamp(color+gr,0.0,1.0);",

    "  gl_FragColor=vec4(color,u_opacity);",
    "}"
  ];

  var FS = FS_PARTS.join("\n");

  function mkSh(gl, type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error("[AcidSq] Shader error:", gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  function AcidSq(canvas) {
    this.canvas  = canvas;
    this.mouse   = { x: 0.5, y: 0.5 };
    this.t0      = performance.now();
    this.rafId   = null;

    var gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) { console.warn("[AcidSq] WebGL not available"); return; }
    this.gl = gl;

    this._build();
    this._events();
    this.resize();
    this._loop();
  }

  AcidSq.prototype._build = function () {
    var gl = this.gl;
    var vs = mkSh(gl, gl.VERTEX_SHADER, VS);
    var fs = mkSh(gl, gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;

    var p = gl.createProgram();
    gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.error("[AcidSq] Link:", gl.getProgramInfoLog(p)); return;
    }
    this.prog = p;
    this.loc = {
      apos: gl.getAttribLocation (p, "a_pos"),
      time: gl.getUniformLocation(p, "u_time"),
      res : gl.getUniformLocation(p, "u_resolution"),
      mou : gl.getUniformLocation(p, "u_mouse"),
      op  : gl.getUniformLocation(p, "u_opacity"),
      ms  : gl.getUniformLocation(p, "u_ms"),
      mr  : gl.getUniformLocation(p, "u_mr"),
    };
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    this.buf = buf;
  };

  AcidSq.prototype._events = function () {
    var self = this, hero = this.canvas.parentElement;
    function upd(cx, cy) {
      var r = hero.getBoundingClientRect();
      self.mouse.x = (cx - r.left) / r.width;
      self.mouse.y = 1 - (cy - r.top) / r.height;
    }
    hero.addEventListener("mousemove", function(e){ upd(e.clientX, e.clientY); });
    hero.addEventListener("touchmove", function(e){ e.preventDefault(); upd(e.touches[0].clientX,e.touches[0].clientY); }, {passive:false});
    window.addEventListener("resize", function(){ self.resize(); });
  };

  AcidSq.prototype.resize = function () {
    var el = this.canvas.parentElement;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = el.offsetWidth, h = el.offsetHeight;
    this.canvas.width  = Math.floor(w * dpr);
    this.canvas.height = Math.floor(h * dpr);
    this.canvas.style.width  = w + "px";
    this.canvas.style.height = h + "px";
    if (this.gl) this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  };

  AcidSq.prototype._loop = function () {
    if (!this.prog) return;
    var self = this, gl = this.gl;
    var t = (performance.now() - this.t0) / 1000;

    gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.useProgram(this.prog);
    gl.uniform1f(this.loc.time, t);
    gl.uniform2f(this.loc.res,  this.canvas.width, this.canvas.height);
    gl.uniform2f(this.loc.mou,  this.mouse.x, this.mouse.y);
    gl.uniform1f(this.loc.op,   0.45);
    gl.uniform1f(this.loc.ms,   0.2);
    gl.uniform1f(this.loc.mr,   0.23);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.enableVertexAttribArray(this.loc.apos);
    gl.vertexAttribPointer(this.loc.apos, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    this.rafId = requestAnimationFrame(function(){ self._loop(); });
  };

  function boot() {
    var el = document.getElementById("hero-canvas");
    if (!el) { console.warn("[AcidSq] #hero-canvas not found"); return; }
    // Make canvas immediately visible — no opacity gate
    el.style.opacity = "1";
    new AcidSq(el);
    console.log("[AcidSq] started");
  }

  // Run right away (after DOM) — no 2.2s wait; preloader is visual-only
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
