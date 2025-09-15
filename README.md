# Chatbot Flow Builder  

A **React-based chatbot flow builder** that allows you to visually design chatbot conversations by connecting nodes using [React Flow](https://reactflow.dev/).  

---

## Hosted URL for Live Demo

🔗 **Live Demo:** [Chatbot Flow Builder](https://chatbot-flow-builder-ten-zeta.vercel.app/)  

### https://chatbot-flow-builder-ten-zeta.vercel.app/

---

## 🚀 Features  

- **Drag & Drop Nodes**  
  - Add text message nodes from the **Nodes Panel**.  
- **Custom Nodes**  
  - Currently supports **Text Message Nodes**.  
  - Easily extensible to add more node types in the future.  
- **Edges**  
  - Connect nodes using edges to define chatbot flow.  
  - **One outgoing edge** allowed per source handle.  
  - **Multiple incoming edges** allowed per target handle.  
- **Settings Panel**  
  - Edit node properties such as message text.  
  - Replaces the Nodes Panel when a node is selected.  
- **Save Flow**  
  - Validate and save your chatbot flow.  
  - Displays an **error** if more than one node has empty target handles.  

---

## 🛠️ Tech Stack  

- **React**  
- **React Flow**  
- **TypeScript**  
- **Tailwind CSS**

---

## 📦 Installation & Setup  

Clone the repo and install dependencies:  

```bash
# Clone the repo
git clone https://github.com/itsmanojdev/chatbot-flow-builder.git

# Navigate to project folder
cd chatbot-flow-builder

# Install dependencies
npm install

#Run the project locally:
npm run dev
```
The app will be available at http://localhost:5173/

---

## 📋 Usage  

1. Drag a **Message Node** from the right-side **Nodes Panel** onto the canvas.  
2. Connect nodes using edges by dragging from **source handles** to **target handles**.  
3. Click a node to open the **Settings Panel** and edit its text.  
4. Press **Save Changes** to validate and save your flow.  

---

<p align="center">
  🚀 Built with passion & ❤️ for clean code by <b>itsmanojdev</b>
</p>
