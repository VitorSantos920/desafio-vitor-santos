class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    let products = [],
      totalPrice = 0;

    let tableValues = [
      {
        code: 'cafe',
        value: 3,
      },
      {
        code: 'chantily',
        value: 1.5,
      },
      {
        code: 'suco',
        value: 6.2,
      },
      {
        code: 'sanduiche',
        value: 6.5,
      },
      {
        code: 'queijo',
        value: 2,
      },
      {
        code: 'salgado',
        value: 7.25,
      },
      {
        code: 'combo1',
        value: 9.5,
      },
      {
        code: 'combo2',
        value: 7.5,
      },
    ];

    if (
      metodoDePagamento !== 'dinheiro' &&
      metodoDePagamento !== 'debito' &&
      metodoDePagamento !== 'credito'
    ) {
      console.log('Forma de pagamento inválida!');
      return;
    }

    if (!itens.length) {
      console.log('Não há itens no carrinho de compra!');
      return;
    }

    for (let i = 0; i < itens.length; i++) {
      let productName = itens[i].split(',')[0];
      let productQuantity = +itens[i].split(',')[1];

      if (productName === '') {
        console.log('Item inválido!');
        return;
      }

      if (productQuantity === 0 || productQuantity == undefined) {
        console.log('Quantidade inválida!');
        return;
      }

      products.push({
        name: productName,
        quantity: productQuantity,
      });
    }

    for (let i = 0; i < products.length; i++) {
      let product = tableValues.find(
        (product) => product.code === products[i].name
      );

      products[i].productTotalPrice = product.value * products[i].quantity;
    }

    totalPrice = products.reduce(
      (accumulator, current) => (accumulator += current.productTotalPrice),
      0
    );

    if (metodoDePagamento === 'dinheiro') totalPrice -= (5 / 100) * totalPrice;
    if (metodoDePagamento === 'credito') totalPrice += (3 / 100) * totalPrice;

    console.log(
      totalPrice.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }
}

const cl = new CaixaDaLanchonete();
cl.calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']);

export { CaixaDaLanchonete };
