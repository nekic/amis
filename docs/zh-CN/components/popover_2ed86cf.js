amis.define('docs/zh-CN/components/popover.md', function(require, exports, module, define) {

  module.exports = {
    "title": "PopOver 弹出提示",
    "description": null,
    "type": 0,
    "group": "⚙ 功能",
    "menuName": "popover",
    "icon": null,
    "order": 60,
    "html": "<div class=\"markdown-body\"><p>popover 不是一个独立组件，它是嵌入到其它组件中使用的，目前可以在以下组件中配置</p>\n<ul>\n<li>table 的 column</li>\n<li>list 的 column</li>\n<li>static</li>\n<li>cards 里的字段</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" href=\"#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本配置</h2><p>比如在 CRUD 的 tpl 中，可以默认截断显示，然后加上 popOver 来显示全部内容</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"crud\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample?waitSeconds=1\",\n    \"columns\": [\n        {\n            \"type\": \"tpl\",\n            \"name\": \"engine\",\n            \"label\": \"Rendering engine\",\n            \"tpl\": \"${engine|truncate:6}\",\n            \"popOver\": \"${engine}\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>上面的 popOver 精简写法只支持 1.6.5 及以上版本，之前版本需要使用 &quot;popOver&quot;: {&quot;body&quot;: &quot;$engine&quot;}</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E5%9C%A8%E5%85%B6%E5%AE%83%E7%BB%84%E4%BB%B6%E9%87%8C%E7%9A%84%E7%A4%BA%E4%BE%8B\" href=\"#%E5%9C%A8%E5%85%B6%E5%AE%83%E7%BB%84%E4%BB%B6%E9%87%8C%E7%9A%84%E7%A4%BA%E4%BE%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>在其它组件里的示例</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"form\",\n    \"body\": [\n      {\n        \"name\": \"static\",\n        \"type\": \"static\",\n        \"label\": \"静态展示\",\n        \"value\": \"static\",\n        \"popOver\": \"弹出内容\"\n      }\n    ]\n  },\n  {\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample?perPage=5\",\n    \"body\": [\n      {\n        \"type\": \"list\",\n        \"source\": \"$rows\",\n        \"listItem\": {\n          \"body\": [\n            {\n              \"type\": \"hbox\",\n              \"columns\": [\n                {\n                  \"label\": \"Engine\",\n                  \"name\": \"engine\",\n                  \"popOver\": \"弹出内容\"\n                }\n              ]\n            }\n          ]\n        }\n      }\n    ]\n  },\n  {\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample?perPage=5\",\n    \"body\": {\n      \"type\": \"cards\",\n      \"source\": \"$rows\",\n      \"card\": {\n        \"body\": [\n          {\n            \"label\": \"Engine\",\n            \"name\": \"engine\",\n            \"popOver\": \"弹出内容\"\n          }\n        ]\n      }\n    }\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%9B%B4%E5%A4%9A%E9%85%8D%E7%BD%AE\" href=\"#%E6%9B%B4%E5%A4%9A%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>更多配置</h2><p>可以配置触发条件，是否显示 icon，title 等，具体请参考后面的配置列表</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"crud\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample?waitSeconds=1\",\n    \"columns\": [\n        {\n            \"type\": \"tpl\",\n            \"name\": \"engine\",\n            \"label\": \"Rendering engine\",\n            \"tpl\": \"${engine|truncate:6}\",\n            \"popOver\": {\n                \"trigger\": \"hover\",\n                \"position\": \"left-top\",\n                \"showIcon\": false,\n                \"title\": \"标题\",\n                \"body\": {\n                    \"type\": \"tpl\",\n                    \"tpl\": \"${engine}\"\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"popoverenableon\" href=\"#popoverenableon\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>popOverEnableOn</h2><p>可以给列上配置<code>popOverEnableOn</code>属性，该属性为<a href=\"../../docs/concepts/expression\">表达式</a>，通过<a href=\"../../docs/concepts/expression\">表达式</a>配置当前行是否启动<code>popOver</code>功能</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"crud\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/sample?waitSeconds=1\",\n    \"columns\": [\n        {\n            \"name\": \"id\",\n            \"label\": \"ID\",\n            \"popOver\": {\n                \"body\": {\n                    \"type\": \"tpl\",\n                    \"tpl\": \"${id}\"\n                }\n            },\n            \"popOverEnableOn\": \"this.id == 1\"\n        },\n        {\n            \"name\": \"engine\",\n            \"label\": \"Rendering engine\",\n            \"popOver\": {\n                \"body\": {\n                    \"type\": \"tpl\",\n                    \"tpl\": \"${engine}\"\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性列表</h2><ul>\n<li><p><code>mode</code> 可配置成 <code>popOver</code>、<code>dialog</code> 或者 <code>drawer</code>。 默认为 <code>popOver</code>。</p>\n</li>\n<li><p><code>size</code> 当配置成 <code>dialog</code> 或者 <code>drawer</code> 的时候有用。</p>\n</li>\n<li><p><code>position</code> 配置弹出位置，只有 <code>popOver</code> 模式有用，默认是自适应。\n可选参数：</p>\n<ul>\n<li><code>center</code></li>\n<li><code>left-top</code></li>\n<li><code>right-top</code></li>\n<li><code>left-bottom</code></li>\n<li><code>right-bottom</code></li>\n</ul>\n<p>atX-atY-myX-myY\n即：对齐目标的位置-对齐自己的位置</p>\n<ul>\n<li><code>left-top-right-bottom</code> 在目标位置的左上角显示。</li>\n<li><code>left-center-right-center</code> 在目标的左侧显示，垂直对齐。</li>\n<li>...</li>\n</ul>\n<p>固定位置</p>\n<ul>\n<li><code>fixed-center</code></li>\n<li><code>fixed-left-top</code></li>\n<li><code>fixed-right-top</code></li>\n<li><code>fixed-left-bottom</code></li>\n<li><code>fixed-right-bottom</code>。</li>\n</ul>\n</li>\n<li><p><code>offset</code> 默认 <code>{top: 0, left: 0}</code>，如果要来一定的偏移请设置这个。</p>\n</li>\n<li><p><code>trigger</code> 触发弹出的条件。可配置为 <code>click</code> 或者 <code>hover</code>。默认为 <code>click</code>。</p>\n</li>\n<li><p><code>showIcon</code> 是否显示图标。默认会有个放大形状的图标出现在列里面。如果配置成 false，则触发事件出现在列上就会触发弹出。</p>\n</li>\n<li><p><code>title</code> 弹出框的标题。</p>\n</li>\n<li><p><code>body</code> 弹出框的内容。</p>\n</li>\n</ul>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本配置",
          "fragment": "%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "在其它组件里的示例",
          "fragment": "%E5%9C%A8%E5%85%B6%E5%AE%83%E7%BB%84%E4%BB%B6%E9%87%8C%E7%9A%84%E7%A4%BA%E4%BE%8B",
          "fullPath": "#%E5%9C%A8%E5%85%B6%E5%AE%83%E7%BB%84%E4%BB%B6%E9%87%8C%E7%9A%84%E7%A4%BA%E4%BE%8B",
          "level": 2
        },
        {
          "label": "更多配置",
          "fragment": "%E6%9B%B4%E5%A4%9A%E9%85%8D%E7%BD%AE",
          "fullPath": "#%E6%9B%B4%E5%A4%9A%E9%85%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "popOverEnableOn",
          "fragment": "popoverenableon",
          "fullPath": "#popoverenableon",
          "level": 2
        },
        {
          "label": "属性列表",
          "fragment": "%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});