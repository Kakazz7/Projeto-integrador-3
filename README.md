# Finora — controle financeiro pessoal

Interface web em React para o projeto integrador de controle financeiro.

## Requisitos
- Node.js 18 ou superior
- npm

## Executar no VS Code / GitHub Codespaces

1. Extraia o ZIP e abra a pasta `finora-react` no VS Code.
2. Abra o terminal integrado.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm run dev -- --host 0.0.0.0
   ```

5. Abra o endereço apresentado pelo Vite. No Codespaces, encaminhe/abra a porta `5173`.

## O que está incluído
- Dashboard com resumo de saldo, receitas e despesas.
- Página de movimentações com filtros visuais.
- Página de categorias.
- Página de relatórios com gráficos demonstrativos.
- Página de planejamento financeiro.
- Navegação entre páginas usando React Router.
- Layout responsivo para desktop e celular.

## Importante
Esta é uma versão de interface/protótipo. Os valores e movimentações são demonstrativos e não são gravados em banco de dados. O cadastro, edição e persistência real serão implementados em uma etapa futura com a tecnologia de armazenamento definida para o projeto (por exemplo, SQLite na aplicação Android).
