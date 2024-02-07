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
  ID_NOT_EXIST: 'Id da linha inválido ou não existe',
  LINE_NOT_EXIST: 'Esta linha não existe',
  EMPTY_CODE: 'Preencha campo código',
  EMPTY_DESCRIPTION: 'Preencha campo descrição',
  EMPTY_STAGE: 'Preencha campo etapa de processo',
  EXIST_CODE: 'Este código de linha já existe',
  EXIST_DESCRIPTION: 'Esta descrição de linha já existe',
};

export const EmployeeMessagesHelper = {
  ID_NOT_EXIST: 'Este funcionário não existe',
  ID_NOT_EXIST_FOR_UPDATE: 'Este funcionário não existe para ser alterada',
  ID_NOT_EXIST_FOR_DELETED: 'Este funcionário não existe para ser deletada',
  EMPTY_NAME: 'Preencha campo nome',
  EMPTY_REGISTRATION: 'Preencha campo matrícula',
  EMPTY_DEPARTMENT: 'Preencha campo departamento',
  EMPTY_SHIFT: 'Preencha campo turno',
  EMPTY_LINEID: 'Informe o Id da linha',
  EXIST_REGISTRATION: 'Esta matrícula já está cadastrada.',
};

export const UsersMessagesHelper = {
  ID_NOT_EXIST: 'Este usuário não existe',
  ID_NOT_EXIST_FOR_UPDATE: 'Este usuário não existe para ser alterada',
  ID_NOT_EXIST_FOR_DELETED: 'Este usuário não existe para ser deletada',
  EMPTY_USERNAME: 'Preencha campo nome de usuário',
  EMPTY_PASSWORD: 'Preencha campo senha',
  EMPTY_EMAIL: 'Preencha campo email',
  NOT_TYPE_EMAIL: 'Este email não e válido',
  EMPTY_PERMISSION: 'Preencha campo permição',
  EMPTY_EMPLOYEE_ID: 'Informe o Id do funcionário',
  EXIST_USERNAME: 'Esta usuário já está cadastrada.',
  EXIST_EMAIL: 'Esta email já está cadastrada.',
  PASSWORD_VALID:
    'A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais',
};

export const RolesMessagesHelper = {
  EMPTY_NAME: 'Preencha campo nome',
  EMPTY_PERMISSION: 'Preencha campo permição',
};

export const MessageHelps = {
  INTERNAL_SERVER: 'Internal server error',
};
