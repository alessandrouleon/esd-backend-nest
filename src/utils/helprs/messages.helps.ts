export const FilterTableMessagesHelper = {
  LINES_LIST_WITH_IS_PAGINATED_MUST_BE_BOOLEAN:
    '"isPaginated" deve ser do tipo: boolean',
  LINES_LIST_WITH_COLUMN_IS_STRING: 'Coluna deve ser do tipo: string',
  LINES_LIST_WITH_VALUE_IS_STRING: 'Valor deve ser do tipo: string',
  EMPTY_COLUMN_FILTER:
    'Preencha valores válidos para aplicar o filtro na coluna.',
  EMPTY_VALUE_FILTER: 'Preencha valores válidos para filtra.',
  NOT_EXISTS_COLUMN_AND_VALUE:
    'Os campos (coluna) e (valor) devem ser vázios para que a listagem não seja páginada',
};

export const LineMessagesHelper = {
  ID_NOT_EXIST: 'Esta linha não existe para ser alterada',
  ID_NOT_EXIST_FOR_DELETED: 'Esta linha não existe para ser deletada',
  EMPTY_CODE: 'Preencha campo código',
  EMPTY_DESCRIPTION: 'Preencha campo descrição',
  EXIST_CODE: 'Este código de linha já existe',
  EXIST_DESCRIPTION: 'Esta descrição de linha já existe',
};
