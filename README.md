# ⚽ Magick IA - Vitrine de Cartas Colecionáveis

Uma aplicação web moderna e responsiva para exibição e filtragem de cartas colecionáveis de jogadores de futebol, com integração direta para compras via WhatsApp.

Desenvolvido durante o evento **"Semana do zero ao programador contratado"** promovido pela **Magick IA**.

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Demonstração Visual e Estilização](#-demonstração-visual-e-estilização)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Boas Práticas Implementadas](#-boas-práticas-implementadas)

---

## 📖 Sobre o Projeto

O **Magick IA - Cartas Colecionáveis** é um e-commerce/vitrine interativa que permite aos usuários explorar diversas cartas de jogadores renomados (como Mbappé, Haaland, Aitana Bonmatí, Jude Bellingham, entre outros).

A aplicação conta com um sistema de **filtragem em tempo real no front-end**, permitindo que o cliente filtre o catálogo por categoria e/ou preço máximo. Ao decidir comprar uma carta, o usuário é direcionado para o WhatsApp com uma mensagem personalizada pré-preenchida para iniciar a negociação.

---

## ⚡ Funcionalidades

- **Filtragem por Categoria:** Seleção de cartas específicas por raridade/tipo (ex: *Ouro*, *TOTS*).
- **Filtragem por Preço Máximo:** Definição de valor limite para encontrar cartas dentro do orçamento.
- **Suporte a Múltiplos Filtros:** Aplicação conjunta de filtros (Categoria + Preço).
- **Atalho de Teclado:** Execução do filtro pressionando a tecla `Enter` no campo de preço.
- **Limpeza de Filtros:** Botão para resetar rapidamente as seleções e reexibir todo o catálogo.
- **Feedback Visual (Resultado Vazio):** Exibição de uma mensagem quando nenhuma carta corresponder aos critérios informados.
- **Integração com WhatsApp:** Botões de compra dinâmica com link direto `wa.me` contendo mensagem personalizada para o item selecionado.
- **Layout Responsivo:** Adaptação total para computadores, tablets e smartphones.

---

## 🎨 Demonstração Visual e Estilização

A interface foi modernizada utilizando conceitos de **Glassmorphism** e **Design Futurista Esportivo**:
- **Efeitos de Vidro Translúcido (`backdrop-filter: blur`):** Aplicados nos cartões e na barra de filtros.
- **Feedback Interativo:** Animações e elevação em 3D (`transform: translateY`) nos cards ao passar o ponteiro do mouse (`:hover`).
- **CSS Grid:** Alinhamento dinâmico e flexível dos itens do catálogo.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página, atributos `data-*` para armazenamento de dados das cartas e atributos de acessibilidade/segurança (`alt`, `rel="noopener noreferrer"`).
- **CSS3:** Estilização moderna com variáveis visuais, CSS Grid, Flexbox, transições, sombras e responsividade (`@media queries`).
- **JavaScript (Vanilla JS):** Manipulação dinâmica do DOM, captura de eventos e lógica de filtragem sem dependências externas.

---

## 📁 Estrutura do Projeto

```text
├── index.html            # Estrutura principal da aplicação
├── src/
│   ├── css/
│   │   ├── reset.css     # Normalização de estilos globais
│   │   └── estilos.css   # Estilização completa e modernizada
│   ├── js/
│   │   └── index.js      # Lógica de interação e filtragem de cartas
│   └── imagens/          # Imagens dos cards, logo e plano de fundo
└── README.md             # Documentação do projeto
```

---

## 🚀 Como Executar

Não é necessária a instalação de dependências ou uso de servidores/compiladores.

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/magick-ia-cartas.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd magick-ia-cartas
   ```

3. **Abra o arquivo `index.html` em seu navegador de preferência.**
   - *(Dica: Se estiver usando o VS Code, utilize a extensão **Live Server** para rodar localmente).*

---

## ✨ Boas Práticas Implementadas

- **Separação de Responsabilidades:** Separação clara entre estrutura (HTML), apresentação (CSS) e lógica de negócios (JS).
- **Manipulação de Atributos `data-*`:** Leitura direta de informações técnicas das cartas via atributos de dados do HTML no JavaScript.
- **Tratamento de Dados:** Conversão correta de strings numéricas usando `parseFloat()` para evitar falhas de validação.
- **Segurança da Informação:** Uso de `rel="noopener noreferrer"` em links externos que abrem em novas abas (`target="_blank"`).
- **Acessibilidade:** Textos de imagens descritivos (`alt`) e estados focáveis estilizados.
