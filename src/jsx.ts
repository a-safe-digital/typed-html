export namespace JSX {
  export type Element = string;
  export interface IntrinsicElements {
    a: HtmlAnchorTag;
    abbr: HtmlTag;
    address: HtmlTag;
    animate: HtmlSvgTag;
    animateMotion: HtmlSvgTag;
    animateTransform: HtmlSvgTag;
    area: HtmlAreaTag;
    article: HtmlTag;
    aside: HtmlTag;
    audio: HtmlAudioTag;
    b: HtmlTag;
    bb: HtmlBrowserButtonTag;
    base: BaseTag;
    bdi: HtmlTag;
    bdo: HtmlTag;
    blockquote: HtmlQuoteTag;
    body: HtmlBodyTag;
    br: HtmlTag;
    button: HtmlButtonTag;
    canvas: HtmlCanvasTag;
    caption: HtmlTag;
    circle: HtmlSvgTag;
    cite: HtmlTag;
    clipPath: HtmlSvgTag;
    code: HtmlTag;
    col: HtmlTableColTag;
    colgroup: HtmlTableColTag;
    commands: HtmlCommandTag;
    data: DataTag;
    datalist: HtmlDataListTag;
    dd: HtmlTag;
    defs: HtmlSvgTag;
    del: HtmlModTag;
    desc: HtmlSvgTag;
    details: HtmlDetailsTag;
    dfn: HtmlTag;
    div: HtmlTag;
    dl: HtmlTag;
    dt: HtmlTag;
    ellipse: HtmlSvgTag;
    em: HtmlTag;
    embed: HtmlEmbedTag;
    feBlend: HtmlSvgTag;
    feColorMatrix: HtmlSvgTag;
    feComponentTransfer: HtmlSvgTag;
    feComposite: HtmlSvgTag;
    feConvolveMatrix: HtmlSvgTag;
    feDiffuseLighting: HtmlSvgTag;
    feDisplacementMap: HtmlSvgTag;
    feDistantLight: HtmlSvgTag;
    feDropShadow: HtmlSvgTag;
    feFlood: HtmlSvgTag;
    feFuncA: HtmlSvgTag;
    feFuncB: HtmlSvgTag;
    feFuncG: HtmlSvgTag;
    feFuncR: HtmlSvgTag;
    feGaussianBlur: HtmlSvgTag;
    feImage: HtmlSvgTag;
    feMerge: HtmlSvgTag;
    feMergeNode: HtmlSvgTag;
    feMorphology: HtmlSvgTag;
    feOffset: HtmlSvgTag;
    fePointLight: HtmlSvgTag;
    feSpecularLighting: HtmlSvgTag;
    feSpotLight: HtmlSvgTag;
    feTile: HtmlSvgTag;
    feTurbulence: HtmlSvgTag;
    fieldset: HtmlFieldSetTag;
    figcaption: HtmlTag;
    figure: HtmlTag;
    filter: HtmlSvgTag;
    footer: HtmlTag;
    foreignObject: HtmlSvgTag;
    form: HtmlFormTag;
    g: HtmlSvgTag;
    h1: HtmlTag;
    h2: HtmlTag;
    h3: HtmlTag;
    h4: HtmlTag;
    h5: HtmlTag;
    h6: HtmlTag;
    head: HtmlTag;
    header: HtmlTag;
    hr: HtmlTag;
    html: HtmlHtmlTag;
    i: HtmlTag;
    iframe: HtmlIFrameTag;
    image: HtmlSvgTag;
    img: HtmlImageTag;
    input: HtmlInputTag;
    ins: HtmlModTag;
    kbd: HtmlTag;
    keygen: KeygenTag;
    label: HtmlLabelTag;
    legend: HtmlLegendTag;
    li: HtmlLITag;
    line: HtmlSvgTag;
    linearGradient: HtmlSvgTag;
    link: HtmlLinkTag;
    main: HtmlTag;
    map: HtmlMapTag;
    mark: HtmlTag;
    marker: HtmlSvgTag;
    mask: HtmlSvgTag;
    menu: HtmlMenuTag;
    meta: HtmlMetaTag;
    metadata: HtmlSvgTag;
    meter: HtmlMeterTag;
    mpath: HtmlSvgTag;
    nav: HtmlTag;
    noscript: HtmlTag;
    object: HtmlObjectTag;
    ol: HtmlOListTag;
    optgroup: HtmlOptgroupTag;
    option: HtmlOptionTag;
    output: HtmlOutputTag;
    p: HtmlTag;
    param: HtmlParamTag;
    path: HtmlSvgTag;
    pattern: HtmlSvgTag;
    polygon: HtmlSvgTag;
    polyline: HtmlSvgTag;
    pre: HtmlTag;
    progress: HtmlProgressTag;
    q: HtmlQuoteTag;
    radialGradient: HtmlSvgTag;
    rb: HtmlTag;
    rect: HtmlSvgTag;
    rp: HtmlTag;
    rt: HtmlTag;
    rtc: HtmlTag;
    ruby: HtmlTag;
    s: HtmlTag;
    samp: HtmlTag;
    script: HtmlScriptTag;
    section: HtmlTag;
    select: HtmlSelectTag;
    set: HtmlSvgTag;
    slot: HtmlTag;
    small: HtmlTag;
    source: HtmlSourceTag;
    span: HtmlTag;
    stop: HtmlSvgTag
    strong: HtmlTag;
    style: HtmlStyleTag;
    sub: HtmlTag;
    sup: HtmlTag;
    svg: HtmlSvgTag;
    switch: HtmlSvgTag;
    symbol: HtmlSvgTag
    table: HtmlTableTag;
    tbody: HtmlTag;
    td: HtmlTableDataCellTag;
    template: HtmlTag;
    text: HtmlSvgTag;
    textarea: HtmlTextAreaTag;
    textPath: HtmlSvgTag;
    tfoot: HtmlTableSectionTag;
    th: HtmlTableHeaderCellTag;
    thead: HtmlTableSectionTag;
    time: HtmlTimeTag;
    title: HtmlTag;
    tr: HtmlTableRowTag;
    track: HtmlTrackTag;
    tspan: HtmlSvgTag;
    u: HtmlTag;
    ul: HtmlTag;
    use: HtmlSvgTag;
    var: HtmlTag;
    video: HtmlVideoTag;
    view: HtmlSvgTag;
    wbr: HtmlTag;
  }
  export interface HtmlBodyTag {
    onafterprint?: string;
    onbeforeprint?: string;
    onbeforeonload?: string;
    onblur?: string;
    onerror?: string;
    onfocus?: string;
    onhaschange?: string;
    onload?: string;
    onmessage?: string;
    onoffline?: string;
    ononline?: string;
    onpagehide?: string;
    onpageshow?: string;
    onpopstate?: string;
    onredo?: string;
    onresize?: string;
    onstorage?: string;
    onundo?: string;
    onunload?: string;
  }
  export interface HtmlTag {
    oncontextmenu?: string;
    onkeydown?: string;
    onkeypress?: string;
    onkeyup?: string;
    onclick?: string;
    ondblclick?: string;
    ondrag?: string;
    ondragend?: string;
    ondragenter?: string;
    ondragleave?: string;
    ondragover?: string;
    ondragstart?: string;
    ondrop?: string;
    onmousedown?: string;
    onmousemove?: string;
    onmouseout?: string;
    onmouseover?: string;
    onmouseup?: string;
    onmousewheel?: string;
    onscroll?: string;
  }
  export interface FormEvents {
    onblur?: string;
    onchange?: string;
    onfocus?: string;
    onformchange?: string;
    onforminput?: string;
    oninput?: string;
    oninvalid?: string;
    onselect?: string;
    onsubmit?: string;
  }
  export interface HtmlInputTag extends FormEvents {
  }
  export interface HtmlFieldSetTag extends FormEvents {
  }
  export interface HtmlFormTag extends FormEvents {
  }
  export interface MediaEvents {
    onabort?: string;
    oncanplay?: string;
    oncanplaythrough?: string;
    ondurationchange?: string;
    onemptied?: string;
    onended?: string;
    onerror?: string;
    onloadeddata?: string;
    onloadedmetadata?: string;
    onloadstart?: string;
    onpause?: string;
    onplay?: string;
    onplaying?: string;
    onprogress?: string;
    onratechange?: string;
    onreadystatechange?: string;
    onseeked?: string;
    onseeking?: string;
    onstalled?: string;
    onsuspend?: string;
    ontimeupdate?: string;
    onvolumechange?: string;
    onwaiting?: string;
  }
  export interface HtmlAudioTag extends MediaEvents {
  }
  export interface HtmlEmbedTag extends MediaEvents {
  }
  export interface HtmlImageTag extends MediaEvents {
  }
  export interface HtmlObjectTag extends MediaEvents {
  }
  export interface HtmlVideoTag extends MediaEvents {
  }
  export interface HtmlTag {
    accesskey?: string;
    class?: string;
    contenteditable?: string;
    dir?: string;
    hidden?: string | boolean;
    id?: string;
    role?: string;
    lang?: string;
    draggable?: string | boolean;
    spellcheck?: string | boolean;
    style?: string;
    tabindex?: string;
    title?: string;
    translate?: string | boolean;
  }
  export interface HtmlAnchorTag extends HtmlTag {
    href?: string;
    target?: string;
    download?: string;
    ping?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
  }
  export interface HtmlAreaTag extends HtmlTag {
    alt?: string;
    coords?: string;
    shape?: string;
    href?: string;
    target?: string;
    ping?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
  }
  export interface HtmlAudioTag extends HtmlTag {
    src?: string;
    autobuffer?: string;
    autoplay?: string;
    loop?: string;
    controls?: string;
  }
  export interface BaseTag extends HtmlTag {
    href?: string;
    target?: string;
  }
  export interface HtmlQuoteTag extends HtmlTag {
    cite?: string;
  }
  export interface HtmlBodyTag extends HtmlTag {
  }
  export interface HtmlButtonTag extends HtmlTag {
    action?: string;
    autofocus?: string | boolean;
    disabled?: string | boolean;
    enctype?: string;
    form?: string;
    method?: string;
    name?: string;
    novalidate?: string | boolean;
    target?: string;
    type?: string;
    value?: string;
  }
  export interface HtmlDataListTag extends HtmlTag {
  }
  export interface HtmlCanvasTag extends HtmlTag {
    width?: string;
    height?: string;
  }
  export interface HtmlTableColTag extends HtmlTag {
    span?: string;
  }
  export interface HtmlTableSectionTag extends HtmlTag {
  }
  export interface HtmlTableRowTag extends HtmlTag {
  }
  export interface DataTag extends HtmlTag {
    value?: string;
  }
  export interface HtmlEmbedTag extends HtmlTag {
    src?: string;
    type?: string;
    width?: string;
    height?: string;
    [anything: string]: string | boolean | undefined;
  }
  export interface HtmlFieldSetTag extends HtmlTag {
    disabled?: string | boolean;
    form?: string;
    name?: string;
  }
  export interface HtmlFormTag extends HtmlTag {
    acceptCharset?: string;
    action?: string;
    autocomplete?: string;
    enctype?: string;
    method?: string;
    name?: string;
    novalidate?: string | boolean;
    target?: string;
  }
  export interface HtmlHtmlTag extends HtmlTag {
    manifest?: string;
  }
  export interface HtmlIFrameTag extends HtmlTag {
    src?: string;
    srcdoc?: string;
    name?: string;
    sandbox?: string;
    seamless?: string;
    width?: string;
    height?: string;
  }
  export interface HtmlImageTag extends HtmlTag {
    alt?: string;
    src?: string;
    crossorigin?: string;
    usemap?: string;
    ismap?: string;
    width?: string;
    height?: string;
  }
  export interface HtmlInputTag extends HtmlTag {
    accept?: string;
    action?: string;
    alt?: string;
    autocomplete?: string;
    autofocus?: string | boolean;
    checked?: string | boolean;
    disabled?: string | boolean;
    enctype?: string;
    form?: string;
    height?: string;
    list?: string;
    max?: string;
    maxlength?: string;
    method?: string;
    min?: string;
    multiple?: string | boolean;
    name?: string;
    novalidate?: string | boolean;
    pattern?: string;
    placeholder?: string;
    readonly?: string;
    required?: string | boolean;
    size?: string;
    src?: string;
    step?: string;
    target?: string;
    type?: string;
    value?: string;
    width?: string;
  }
  export interface HtmlModTag extends HtmlTag {
    cite?: string;
    datetime?: string | Date;
  }
  export interface KeygenTag extends HtmlTag {
    autofocus?: string | boolean;
    challenge?: string;
    disabled?: string | boolean;
    form?: string;
    keytype?: string;
    name?: string;
  }
  export interface HtmlLabelTag extends HtmlTag {
    form?: string;
    for?: string;
  }
  export interface HtmlLITag extends HtmlTag {
    value?: string | number;
  }
  export interface HtmlLinkTag extends HtmlTag {
    href?: string;
    crossorigin?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
    sizes?: string;
    integrity?: string;
  }
  export interface HtmlMapTag extends HtmlTag {
    name?: string;
  }
  export interface HtmlMetaTag extends HtmlTag {
    name?: string;
    httpEquiv?: string;
    content?: string;
    charset?: string;
  }
  export interface HtmlMeterTag extends HtmlTag {
    value?: string | number;
    min?: string | number;
    max?: string | number;
    low?: string | number;
    high?: string | number;
    optimum?: string | number;
  }
  export interface HtmlObjectTag extends HtmlTag {
    data?: string;
    type?: string;
    name?: string;
    usemap?: string;
    form?: string;
    width?: string;
    height?: string;
  }
  export interface HtmlOListTag extends HtmlTag {
    reversed?: string;
    start?: string | number;
  }
  export interface HtmlOptgroupTag extends HtmlTag {
    disabled?: string | boolean;
    label?: string;
  }
  export interface HtmlOptionTag extends HtmlTag {
    disabled?: string | boolean;
    label?: string;
    selected?: string | boolean;
    value?: string;
  }
  export interface HtmlOutputTag extends HtmlTag {
    for?: string;
    form?: string;
    name?: string;
  }
  export interface HtmlParamTag extends HtmlTag {
    name?: string;
    value?: string;
  }
  export interface HtmlProgressTag extends HtmlTag {
    value?: string | number;
    max?: string | number;
  }
  export interface HtmlCommandTag extends HtmlTag {
    type?: string;
    label?: string;
    icon?: string;
    disabled?: string | boolean;
    checked?: string;
    radiogroup?: string;
    default?: string;
  }
  export interface HtmlLegendTag extends HtmlTag {
  }
  export interface HtmlBrowserButtonTag extends HtmlTag {
    type?: string;
  }
  export interface HtmlMenuTag extends HtmlTag {
    type?: string;
    label?: string;
  }
  export interface HtmlScriptTag extends HtmlTag {
    src?: string;
    type?: string;
    charset?: string;
    async?: string;
    defer?: string;
    crossorigin?: string;
    integrity?: string;
    text?: string;
  }
  export interface HtmlDetailsTag extends HtmlTag {
    open?: string;
  }
  export interface HtmlSelectTag extends HtmlTag {
    autofocus?: string | boolean;
    disabled?: string | boolean;
    form?: string;
    multiple?: string | boolean;
    name?: string;
    required?: string | boolean;
    size?: string;
  }
  export interface HtmlSourceTag extends HtmlTag {
    src?: string;
    type?: string;
    media?: string;
  }
  export interface HtmlStyleTag extends HtmlTag {
    media?: string;
    type?: string;
    disabled?: string | boolean;
    scoped?: string;
  }
  export interface HtmlTableTag extends HtmlTag {
  }
  export interface HtmlTableDataCellTag extends HtmlTag {
    colspan?: string | number;
    rowspan?: string | number;
    headers?: string;
  }
  export interface HtmlTextAreaTag extends HtmlTag {
    autofocus?: string | boolean;
    cols?: string;
    dirname?: string;
    disabled?: string | boolean;
    form?: string;
    maxlength?: string;
    minlength?: string;
    name?: string;
    placeholder?: string;
    readonly?: string | boolean;
    required?: string | boolean;
    rows?: string;
    wrap?: string;
  }
  export interface HtmlTableHeaderCellTag extends HtmlTag {
    colspan?: string | number;
    rowspan?: string | number;
    headers?: string;
    scope?: string;
  }
  export interface HtmlTimeTag extends HtmlTag {
    datetime?: string | Date;
  }
  export interface HtmlTrackTag extends HtmlTag {
    default?: string;
    kind?: string;
    label?: string;
    src?: string;
    srclang?: string;
  }
  export interface HtmlVideoTag extends HtmlTag {
    src?: string;
    poster?: string;
    autobuffer?: string;
    autoplay?: string;
    loop?: string;
    controls?: string;
    width?: string;
    height?: string;
  }
  export interface HtmlSvgTag extends HtmlTag, Record<string, any> {}
}
