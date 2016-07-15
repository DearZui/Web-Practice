function initWebGl (canvas) {
	 var gl;
	 try {
	 	gl = canvas.getContext("experimental-webgl");
	 }
	 catch (e) {
	 	var msg = "Error creating WebGL Context!: " + e.toString();
	 	alert(msg);
	 	throw Error(msg);
	 }
	 return gl;
}

function initViewport (gl, canvas) {
	 gl.viewport(0, 0, canvas.width, canvas.height);
}

function createSquare(gl) {
	var vertexBuffer;
	vertextBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);
	var verts = [
		.5, .5, 0.0,
		-.5, .5, 0.0,
		.5, -.5, 0.0,
		-.5, -.5, 0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
	var square = {buffer: vertexBuffer, vertSize: 3, nVerts: 4, primtype: gl.TRIANGLE_STRIP};
	return square;
}