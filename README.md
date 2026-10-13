# 📱 Cadastro de Contatos — Angular e Ionic

Aplicação de cadastro e gerenciamento de contatos desenvolvida com Angular e Ionic. O projeto demonstra como criar uma interface interativa para operações CRUD e armazenar dados localmente utilizando o Ionic Storage.

## ✨ Funcionalidades

- **Cadastrar contatos:** adicionar nome, e-mail e telefone.
- **Listar contatos:** visualizar os registros cadastrados.
- **Editar contatos:** atualizar as informações de um contato existente.
- **Excluir contatos:** remover registros da lista.
- **Armazenamento local:** salvar e recuperar os contatos utilizando o Ionic Storage.

## 🛠️ Tecnologias utilizadas

- **Angular 19** — estrutura da aplicação e organização dos componentes.
- **TypeScript** — implementação da lógica e tipagem dos dados.
- **Ionic 8** — componentes de interface para a aplicação.
- **Ionic Storage** — persistência local dos contatos.
- **Capacitor 7** — infraestrutura para execução em ambientes web e dispositivos móveis.
- **RxJS** — biblioteca disponível no ecossistema Angular.

## 🧩 Estrutura e funcionamento

A aplicação é organizada em componentes e serviços.

- **HomePage:** controla o formulário, exibe a lista e coordena as operações de cadastro, edição e exclusão.
- **ContatosService:** concentra as operações de armazenamento e recuperação dos dados.
- **Ionic Storage:** mantém os registros salvos no armazenamento local do aplicativo.

Cada contato possui três campos: `nome`, `email` e `telefone`.

O serviço implementa métodos para obter, adicionar, atualizar e excluir contatos. Essa separação ajuda a organizar o código e facilita a manutenção.

## ⚙️ Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### Instalação

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/EricPfeuti/local-storage-angular.git
cd local-storage-angular
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Abra no navegador o endereço local exibido pelo Angular CLI.

## 🧪 Outros comandos

```bash
npm run build
npm test
npm run lint
```

- `npm run build`: compila a aplicação.
- `npm test`: executa os testes configurados.
- `npm run lint`: executa a verificação estática do código, conforme a configuração do projeto.

## 🎯 Objetivo de aprendizagem

O projeto permite praticar:

- Desenvolvimento de aplicações com Angular e TypeScript.
- Criação de interfaces com componentes Ionic.
- Manipulação de listas e formulários.
- Implementação de operações CRUD.
- Separação de responsabilidades entre componentes e serviços.
- Persistência de dados utilizando armazenamento local.
