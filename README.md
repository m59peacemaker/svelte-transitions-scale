# svelte-transitions-scale

Scale transition plugin for [Svelte](https://svelte.technology). [Demo](https://svelte.technology/repl?version=1.30.0&gist=82bacffa5016f8f9ae5c1a34439d98f3)

![scale](https://user-images.githubusercontent.com/4369247/29672968-675ee05c-88b3-11e7-9695-f5eabcd7a80c.gif)

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-transitions-scale
```

Then add the plugin to your Svelte component's exported definition:

```html
<label>
  <input type='checkbox' bind:checked='visible'> visible
</label>

{{#if visible}}
  <!-- use `in`, `out`, or `transition` (bidirectional) -->
  <div transition:scale='{initial: 0.5}'>hello!</div>
{{/if}}

<script>
  import scale from 'svelte-transitions-scale';

  export default {
    transitions: { scale }
  };
</script>
```


## Parameters

`initial` is the initial scale when the element is transitioning in and the final scale when it is transitioning out. It defaults to 0.

```html
<div in:scale='{initial: 0.5}'>
  starts at half its size and grows to full size
</div>
```

`fade` is a boolean indicating whether the element should also fade in/out. If `initial` is anything but the default of `0`, the element will have a harsh entrance or exit unless it is also faded. It defaults to true.

```html
<div transition:scale='{initial: 0, fade: false}'>
  just scale down to nothingness without fading
</div>

<div transition:scale='{initial: 0.5, fade: false}'>
  scale down to half-size and then harshly disappear
</div>
```

You can also specify `delay` and `duration` parameters, which default to `0` and `400` respectively, and a custom `easing` function (which should live on your `helpers`):

```html
<div in:scale='{initial: 0.5, delay: 250, duration: 1000, easing: elasticOut}'>
  scaling in slowly after a brief delay
</div>

<script>
  import scale from 'svelte-transitions-scale';
  import { elasticOut } from 'eases-jsnext';

  export default {
    helpers: { elasticOut },
    transitions: { scale }
  };
</script>
```


## License

[MIT](LICENSE)
