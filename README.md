# Banner Verificação Pessoal

Um banner responsivo e interativo em HTML, CSS e JavaScript conforme solicitado.

## 📋 Especificações Atendidas

✅ **Ícone à esquerda** - Ícone de escudo (shield) usando Font Awesome  
✅ **Texto "Verificação Pessoal"** - Posicionado após o ícone  
✅ **Link à direita** - Link "Avaliação Pessoal" com ícone de link externo  
✅ **100% da largura** - Banner ocupa toda a largura da tela  
✅ **100px de altura** - Altura fixa conforme solicitado  

## 🎨 Características do Design

- **Design moderno** com gradiente em tons de vinho (#6c274f)
- **Totalmente responsivo** para mobile e desktop
- **Efeitos hover** suaves e animações
- **Posição fixa** no topo da página
- **Sombra sutil** para dar profundidade

## ⚡ Funcionalidades JavaScript

### Animações Incluídas:
- **Entrada suave** do banner ao carregar a página
- **Efeito de pulsação** no ícone principal a cada 3 segundos
- **Animações de hover** no banner e no link
- **Efeito de clique** no link de avaliação
- **Auto-hide/show** do banner ao fazer scroll

### Funções Utilitárias:
- `updateEvaluationLink(url, texto)` - Atualiza o link dinamicamente
- `toggleBanner(mostrar)` - Mostra/esconde o banner programaticamente

## 📱 Responsividade

### Desktop (> 768px):
- Texto completo "Avaliação Pessoal" visível
- Espaçamento amplo entre elementos

### Tablet (≤ 768px):
- Texto do link fica oculto, mantendo apenas o ícone
- Padding reduzido

### Mobile (≤ 480px):
- Elementos compactados
- Tamanhos de fonte ajustados
- Layout otimizado para toque

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. **Para integrar em seu projeto:**
   - Copie o HTML do banner para sua página
   - Inclua o CSS `styles.css`
   - Inclua o JavaScript `script.js`
   - Adicione o Font Awesome para os ícones

## 🔧 Personalização

### Mudar as Cores:
```css
.banner {
    background: linear-gradient(135deg, #sua-cor-1, #sua-cor-2);
}
```

### Alterar o Link Dinamicamente:
```javascript
updateEvaluationLink('https://nova-url.com', 'Novo Texto');
```

### Link Atual Configurado:
- **URL:** `https://lms.gebe.mindtech.education/mod/feedback/complete.php?id=27&courseid=2`
- **Comportamento:** Abre em nova aba (target="_blank")
- **Segurança:** Inclui rel="noopener noreferrer"

### Mudar os Ícones:
- Substitua as classes Font Awesome no HTML
- `fas fa-shield-alt` (ícone principal)
- `fas fa-external-link-alt` (ícone do link)

## 📦 Dependências

- **Font Awesome 6.0** (CDN incluído no HTML)
- **Navegadores modernos** com suporte a CSS Grid/Flexbox

## 💡 Dicas de Implementação

1. **Link configurado:** O banner já está direcionando para o sistema LMS de feedback
2. **Nova aba:** O link abre automaticamente em uma nova página (target="_blank")
3. **Para melhor performance:** Considere hospedar o Font Awesome localmente
4. **Para SEO:** Adicione atributos `alt` e `title` apropriados nos ícones

---

**Desenvolvido conforme especificações solicitadas** ✨ 