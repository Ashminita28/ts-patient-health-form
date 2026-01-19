export function el<K extends keyof HTMLElementTagNameMap>(
    tag:K
):HTMLElementTagNameMap[K]{
    return document.createElement(tag);
}