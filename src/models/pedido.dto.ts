import { ItemPedidoDTO } from "./item-pedido.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { RefDTO } from "./ref.dto";

export interface PedidoDTO {
    client: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}