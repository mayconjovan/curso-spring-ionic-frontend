import { CidadeDTO } from "./cidade.dto";

export interface EnderecoDTO {
    id: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    cep: string;
    city: CidadeDTO;
}