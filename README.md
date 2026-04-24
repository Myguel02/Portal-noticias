# 📰 Portal de Notícias

Projeto desenvolvido em **React + TypeScript** como parte da disciplina, com o objetivo de construir a estrutura de um portal de notícias com múltiplos níveis de acesso.

---

## 🎯 Objetivo

Construir a estrutura básica de um **Portal de Notícias**, organizado em 5 níveis de acesso:

- 🌐 Público
- 👤 Leitor
- ✍️ Autor
- 🛠️ Editor
- 👑 SuperAdmin

O foco do projeto é:

- Criação de páginas
- Navegação com rotas
- Componentização em React
- Organização de layout com CSS puro

---

## ⚠️ Observações importantes

- ❌ Não há autenticação real
- ✅ O login é simulado com botões de acesso rápido
- ✅ Todas as rotas são públicas
- ✅ Dados são estáticos (mockados)
- ❌ Não foi utilizado backend

---

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- React Router
- Vite
- CSS puro (sem frameworks)

---

## 📁 Estrutura do projeto

```
src/
├── components/        # Componentes reutilizáveis (Navbar, etc.)
├── pages/
│   ├── publico/
│   ├── leitor/
│   ├── autor/
│   ├── editor/
│   ├── admin/
├── data/              # Dados mockados
├── App.tsx            # Rotas da aplicação
```

---

## 🚀 Como executar o projeto

### 1. Instalar dependências

```
npm install
```

### 2. Rodar o projeto

```
npm run dev
```

### 3. Acessar no navegador

```
http://localhost:5173
```

---

## 🔐 Simulação de Perfis (Login)

A página de login possui botões para simular acesso:

- LEITOR → `/leitor/perfil`
- AUTOR → `/autor/noticias`
- EDITOR → `/editor/painel`
- SUPERADMIN → `/admin/dashboard`

---

## 📄 Principais páginas implementadas

### 🌐 Público

- HomePage
- LoginPage
- CadastroPage
- LembrarSenhaPage
- Busca por UF
- Busca por Tag
- Detalhe da Notícia

### 👤 Leitor

- Perfil
- Comentar notícia

### ✍️ Autor

- Perfil
- Minhas Notícias
- Nova Notícia
- Editar Notícia
- Comentar

### 🛠️ Editor

- Painel
- Perfil
- Publicar/Despublicar
- Editar qualquer notícia

### 👑 SuperAdmin

- Dashboard
- CRUD UFs
- CRUD Cidades
- CRUD Tags
- CRUD Notícias
- CRUD Usuários
- Gerenciamento de Comentários

---

## 🎨 Estilização

- CSS puro
- Layout responsivo básico
- Componentes reutilizáveis
- Cards, tabelas, formulários e grids

---

## 📌 Funcionalidades implementadas

- Navegação entre páginas com React Router
- Uso de `useParams` para rotas dinâmicas
- Formulários com inputs e validação básica
- Simulação de envio de dados
- Armazenamento local com `localStorage`
- Componentização (Navbar, Cards, etc.)

---

## 🧠 Aprendizados

- Estruturação de projetos React
- Organização por perfis de usuário
- Uso de rotas dinâmicas
- Criação de interfaces com CSS puro
- Simulação de sistemas reais sem backend

---

## 📎 Protótipo (Figma)

Link do protótipo utilizado:

👉(https://www.figma.com/design/UPbbWqRvfQtApJK617KSfm/PortalNoticias?node-id=0-1&p=f&t=q4NeVUMyrvggkmkW-0)

---

## 👨‍💻 Autor

Desenvolvido por:

**Myguel Arcanjo**

---

## 📌 Status do Projeto

🚧 Em desenvolvimento (fase de estrutura e interface)

---
