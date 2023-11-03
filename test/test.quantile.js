/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var quantile = require( './../lib' );


// FIXTURES //

var largeRate = require( './fixtures/julia/large_rate.json' );
var largeShape = require( './fixtures/julia/large_shape.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 1, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, 1, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `k` and `lambda`, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 1, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 1, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided a `k` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 2.0, -1, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, -1, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 0.5, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 4.5, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a negative `lambda`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 2.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile for `x` given large parameters `k` and `lambda`', function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var p;
	var y;
	var i;
	var k;

	expected = bothLarge.expected;
	p = bothLarge.p;
	k = bothLarge.k;
	lambda = bothLarge.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', k:'+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 20.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given large shape parameter `k`', function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var p;
	var y;
	var i;
	var k;

	expected = largeShape.expected;
	p = largeShape.p;
	k = largeShape.k;
	lambda = largeShape.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', k:'+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 10.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given large rate parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var p;
	var y;
	var i;
	var k;

	expected = largeRate.expected;
	p = largeRate.p;
	k = largeRate.k;
	lambda = largeRate.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', k:'+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 10.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
