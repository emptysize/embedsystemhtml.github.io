// 展开/折叠子目录
function toggleSubMenu(id) {
    const subMenu = document.getElementById(id);
    subMenu.classList.toggle("hidden");
}

// 动态添加知识文档
function addDocument(id) {
    const subMenu = document.getElementById(id);
    const newDoc = prompt("请输入新的知识文档内容：");
    if (newDoc) {
        const newItem = document.createElement("li");
        newItem.textContent = newDoc;
        subMenu.appendChild(newItem);
    }
}
