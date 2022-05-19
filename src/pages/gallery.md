---
title: Gallery
tags: ['navItem','post']
class: 'mygallery'
layout: 'layouts/home.html'
permalink: '/gallery/index.html'
---

<!-- display all images using info in _data/images.json -->
{%- for img in images.images -%}
<figure class="image-block">
   <img src="{{ img.localUrl }}" alt="{{ img.title }}" />
   <figcaption>
     <a href="{{ img.externalUrl }}">
       {{ img.title }}
     </a>
     by {{ img.author }}
   </figcaption>
   <figcaption>
     <a href="{{ img.licenseUrl }}">
       {{ img.license }}
     </a>
     license
   </figcaption>
</figure>
{%- endfor -%}