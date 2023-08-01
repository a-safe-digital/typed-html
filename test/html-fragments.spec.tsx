/// <reference path="../src/jsx/element-types.d.ts" />
/// <reference path="../src/jsx/events.d.ts" />
/// <reference path="../src/jsx/intrinsic-elements.d.ts" />

import { Component, Props } from '@a-safe-digital/typed-html/types'
import { expect } from 'chai'

describe('jsx-jsxs auto import style (post-react17)', () => {
  it('Simple html structures', () => {
    expect(<a href='test'>a link</a>).to.equal('<a href="test">a link</a>')
    expect(<ul>{[1, 2].map(li => <li>{li}</li>)}</ul>).to.equal(`<ul><li>1</li><li>2</li></ul>`)
    expect(<button onclick='doSomething'></button>).to.equal('<button onclick="doSomething"></button>')
    expect(<div class='class-a'></div>).to.equal('<div class="class-a"></div>')
    expect(<script src='jquery.js' integrity='sha256-123=' crossorigin='anonymous'></script>).to.equal('<script src="jquery.js" integrity="sha256-123=" crossorigin="anonymous"></script>')
  })

  it('Self-closing html tags', () => {
    expect(<area></area>).to.equal('<area>')
    expect(<hr></hr>).to.equal('<hr>')
    expect(<hr>content</hr>).to.equal('<hr>content</hr>')
    expect(<meta charset='utf8'></meta>).to.equal('<meta charset="utf8">')
    expect(<video autoplay=''></video>).to.equal('<video autoplay></video>')
  })

  it('Variables in templates', () => {
    const World = 'World'
    expect(<p>Hello{World}!</p>).to.equal('<p>HelloWorld!</p>')
  })

  it('Jsx.Fragment', () => {
    expect(<><p>Foo</p><p>Bar</p></>).to.equal('<p>Foo</p><p>Bar</p>')
  })

  it('Boolean props', () => {
    // https://www.w3.org/TR/html5/infrastructure.html#boolean-props
    expect(<input checked={true}></input>).to.equal('<input checked>')
    expect(<input checked={false}></input>).to.equal('<input>')
    expect(<input disabled={true}></input>).to.equal('<input disabled>')
    expect(<input disabled={false}></input>).to.equal('<input>')
    expect(<p draggable spellcheck hidden translate></p>).to.equal('<p draggable spellcheck hidden translate></p>')
    expect(<p draggable={false} spellcheck={false} hidden={false} translate={false}></p>).to.equal('<p></p>')
    expect(<form novalidate></form>).to.equal('<form novalidate></form>')
  })

  describe('Encoded props', () => {
    it('should encode " as &quot', () => {
      expect(<div class={'\"'}></div>).to.eq('<div class="&quot;"></div>')
    })
    it('should encode & as &amp', () => {
      expect(<div class={'&'}></div>).to.eq('<div class="&amp;"></div>')
    })
    it('should encode \\u00A0 as &nbsp', () => {
      expect(<div class={'\u00A0'}></div>).to.eq('<div class="&nbsp;"></div>')
    })
  })

  it('Events', () => {
    expect(<div onclick='click' onmouseover='mouseover' ondrag='ondrag'></div>).to.equal('<div onclick="click" onmouseover="mouseover" ondrag="ondrag"></div>')
    expect(<form onfocus='focus'><input onblur='blur'></input></form>).to.equal('<form onfocus="focus"><input onblur="blur"></form>')
    expect(<video onabort='abort' onseeking='seeking'></video>).to.equal('<video onabort="abort" onseeking="seeking"></video>')
  })

  it('Using a Date type attribute', () => {
    expect(<time datetime={new Date('1914-12-20T08:00+0000')}></time>).to.equal('<time datetime="1914-12-20T08:00:00.000Z"></time>')
    expect(<ins datetime={new Date('1914-12-20T08:00+0000')}>new</ins>).to.equal('<ins datetime="1914-12-20T08:00:00.000Z">new</ins>')
    expect(<del datetime={new Date('1914-12-20T08:00+0000')}>old</del>).to.equal('<del datetime="1914-12-20T08:00:00.000Z">old</del>')
  })

  it('using a number attribute', () => {
    expect(<ol start={1}><li value={2}>2</li></ol>).to.equal('<ol start="1"><li value="2">2</li></ol>')
    expect(<meter value={2} min={1} max={3} low={0} high={5} optimum={3}></meter>).to.equal('<meter value="2" min="1" max="3" low="0" high="5" optimum="3"></meter>')
    expect(<progress value={2} max={5}></progress>).to.equal('<progress value="2" max="5"></progress>')
    expect(<td colspan={2} rowspan={5}></td>).to.equal('<td colspan="2" rowspan="5"></td>')
    expect(<th colspan={2} rowspan={5}></th>).to.equal('<th colspan="2" rowspan="5"></th>')
  })

  it('custom elements', () => {
    expect(
      '<custom-element a-custom-attr="value" custom-li-attr="li"></custom-element>'
    ).to.equal(
      <customElement ACustomAttr='value' customLIAttr='li'></customElement>
    )
    expect(<div some-data='s'></div>).to.equal('<div some-data="s"></div>')
  })

  it('children', () => {
    const Header: Component = ({ children, ...props }: Props) => <h1 {...props}>{children}</h1>

    function Button({ children, ...props }: Props) {
      return <button type='button' class='original-class' {...props}>{children}</button>
    }

    expect(<Header class='title'><span>Header Text</span></Header>).to.equal('<h1 class="title"><span>Header Text</span></h1>')
    expect(<Button class='override'/>).to.equal('<button type="button" class="override"></button>')
    expect(<Button>Button Text</Button>).to.equal('<button type="button" class="original-class">Button Text</button>')
  })
})
