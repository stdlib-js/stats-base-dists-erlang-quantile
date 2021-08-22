<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Erlang][erlang-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_quantile_function" align="center" raw="Q(p;k,\lambda) = \frac{1}{\lambda} P^{-1}\left( p, k \right )" alt="Quantile function for a Erlang distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;k,\lambda) = \frac{1}{\lambda} P^{-1}\left( p, k \right )" data-equation="eq:erlang_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/erlang/quantile/docs/img/equation_erlang_quantile_function.svg" alt="Quantile function for a Erlang distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `k` is the shape parameter and `lambda` is the rate parameter of the distribution.  `P^{-1}` is the inverse of the lower regularized incomplete gamma function. The [Erlang][erlang-distribution] distribution is a special case of the gamma distribution, as `k` is constrained to the natural numbers.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-erlang-quantile
```

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-erlang-quantile' );
```

#### quantile( p, k, lambda )

Evaluates the [quantile function][quantile-function] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = quantile( 0.8, 2, 1.0 );
// returns ~2.994

y = quantile( 0.5, 4, 2.0 );
// returns ~1.836
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1, 1.0 );
// returns NaN

y = quantile( -0.1, 1, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 1, NaN );
// returns NaN
```

If provided a `k` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1, 1.0 );
// returns NaN

y = quantile( 0.4, 2.5, 1.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = quantile( 0.3, 0, 2.0 );
// returns 0.0

y = quantile( 0.9, 0, 2.0 );
// returns 0.0
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1, -1.0 );
// returns NaN
```

#### quantile.factory( k, lambda )

Returns a function for evaluating the [quantile function][quantile-function] of an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var myquantile = quantile.factory( 2, 2.0 );
var y = myquantile( 0.8 );
// returns ~1.497

y = myquantile( 0.4 );
// returns ~0.688
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var quantile = require( '@stdlib/stats-base-dists-erlang-quantile' );

var lambda;
var k;
var p;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    p = randu();
    k = round( randu() * 10.0 );
    lambda = randu() * 5.0;
    y = quantile( p, k, lambda );
    console.log( 'p: %d, k: %d, λ: %d, Q(p;k,λ): %d', p.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-erlang-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-erlang-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-erlang-quantile/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-erlang-quantile/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-erlang-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-erlang-quantile?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-erlang-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-erlang-quantile/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-erlang-quantile/main/LICENSE

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
