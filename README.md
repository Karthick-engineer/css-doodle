# css-doodle

![license](https://img.shields.io/github/license/mashape/apistatus.svg)


A web component designed to explore the creative potential of CSS in a simple and expressive manner.
It facilitates the creation of graphic patterns, visual backgrounds, handcrafted icons, and random decorations.


<a href="https://css-doodle.com/">
  <img alt="screenshot" src="https://assets.codepen.io/52982/doodle.png" />
</a>

## Example

```css
<css-doodle>
  @grid: 5 / 200px;
  background: @p(#000, #fff);
  margin: 1px;
</css-doodle>
```

## New Features
### @flow
The `@flow` function generates flow field angles based on 2D Perlin noise. This is extremely useful for generating organic-looking curved paths or directional distributions over your grid.

**Parameters:**
- `from`, `to` - Defines the range of output rotation. Defaults to `0` and `360` (deg).
- `scale` - Controls amplitude mapping (default `1`).
- `frequency` - Specifies the frequency of the noise field (default `1`).
- `octave` - Adds detail layers (default `1`).
- `sharp` - Automatically snaps rotation angles into fixed increments (e.g. `sharp: 4` creates `90` degree rigid turns like Fidenza style).

**Example:**
```css
transform: rotate(@flow(scale=2, sharp=8));
```

### @collide
The `@collide` function tracks generated shapes spatially and checks whether the current shape would overlap with previously placed shapes within the current doodle context. This enables tight, non-overlapping packing patterns.

**Parameters:**
- `x`, `y` - Defines the spatial position to check against.
- `radius` - Defines the bounding radius of the current element.
- `allow` - If set to `1` it will still track the element even if it overlaps (defaults to `0`).

**Example:**
```css
--x: @r(0, 800)px;
--y: @r(0, 400)px;
--radius: 50px;

@match(
  @collide(x=var(--x), y=var(--y), radius=var(--radius)),
  (
    display: none; /* Hide if collided */
  ),
  (
    display: block; /* Draw if clear */
  )
)
```

## Docs
[https://css-doodle.com](http://css-doodle.com)


## Design tools

* [Tabbied](https://tabbied.com) -- Doodle with generated patterns
* [Shapes](https://css-doodle.com/shapes) -- Discover new CSS polygon shapes
* [SVG playground](https://css-doodle.com/svg) -- Generate SVG code with new syntax


## CLI Tools

* [cssd](https://github.com/css-doodle/cli) -- Preview and generate images/videos


## Resources

* [An Introduction to css-doodle](https://yuanchuan.dev/an-introduction-to-css-doodle), by Yuan Chuan
* [Arte generativo con CSS](https://www.youtube.com/watch?v=KKg6Uo1pVLU), by Sonia Ruiz
* [How to Draw Patterns with CSS Using CSS Doodle](https://webdesign.tutsplus.com/tutorials/how-to-draw-patterns-with-css-using-css-doodle--cms-33110), by Adi Purdila


## Build

```bash
make
```

## Support

Thank you for your support! 🙏

<a href="https://opencollective.com/css-doodle#backers" target="_blank"><img src="https://opencollective.com/css-doodle/backers.svg?width=890"></a>
<a href="https://opencollective.com/css-doodle#sponsors" target="_blank"><img src="https://opencollective.com/css-doodle/sponsors.svg?width=890"></a>
