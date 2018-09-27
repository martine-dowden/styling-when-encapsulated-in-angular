// Create a class for the element
class CustomChip extends HTMLElement {
  constructor() {
    super();
    //  Create a showdow root
    const shadow = this.attachShadow({
      mode: 'open'
    });

    //  Create container
    const wrapper = document.createElement('div');

    const avatar = document.createElement('img');
    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'assets/default.png';
    }
    avatar.src = imgUrl;

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    // Take attribute content and put it inside the info span
    const text = this.getAttribute('label');
    info.textContent = text;

    // Style the component
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent =
      `
      :host {
        background: lightgray;
        border-radius: 40px;
        display: inline-block;
        font-family: sans-serif;
        padding: .5rem 1rem;
      }
      
      img {
        height: 1rem;
        margin-right: .5rem;
        vertical-align: baseline;
      }
      :host-context(section) {
        background: gray;
        color: white;
      }
    `

    const slot = document.createElement('slot');
    slot.setAttribute('name', 'slottedImage');

    // attach the created elements to the shadow dom
    shadow.appendChild(wrapper);
    wrapper.appendChild(slot);
    wrapper.appendChild(avatar);
    wrapper.appendChild(info);

    // attach styles
    shadow.appendChild(style);
    console.log(style.isConnected);
  }
}

customElements.define('custom-chip', CustomChip);
