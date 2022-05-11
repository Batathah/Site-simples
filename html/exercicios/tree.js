let arvore = {
    left: {
        left: undefined,
        right: {
            value: 3
       },
       value: 2
    },
    right: undefined,
    value: 10
}
function preOrden(tree){
    console.log(tree.value)// pre (antes)
    tree.left && preOrden(tree. left)
    tree.right && preOrden(tree.right)
}
function inOrden(tree){
    tree.left && inOrden(tree. left)//in (meio)
    console.log(tree.value)
    tree.right && inOrden(tree.right)
}
function posOrden(tree){
    tree.left && posOrden(tree. left)//pos (dps)
    console.log(tree.value)
    tree.right && posOrden(tree.right)
}
console.log('preOrder')
preOrden(arvore)
console.log('inOrder')
inOrden(arvore)
console.log('posOrder')
posOrden(arvore)