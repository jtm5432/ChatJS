// 상태 객체
const state = {
    participants: JSON.parse(localStorage.getItem('participants')) || [],
    editorContent: localStorage.getItem('editorContent') || '',
    nickname: '',
};

// 앱을 렌더링하는 함수
function renderApp() {
    const app = document.getElementById("app");
    app.innerHTML = '';  // 앱의 내용을 지웁니다.

    const nicknameInput = document.createElement("input");
    nicknameInput.value = state.nickname;
    app.appendChild(nicknameInput);

    const joinBtn = document.createElement("button");
    joinBtn.appendChild(document.createTextNode("Join"));
    app.appendChild(joinBtn);

    const participantsList = document.createElement("ul");
    state.participants.forEach(participant => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(participant));
        participantsList.appendChild(li);
    });
    app.appendChild(participantsList);

    const editor = document.createElement("textarea");
    editor.value = state.editorContent;
    app.appendChild(editor);

    // 이벤트 리스너를 추가합니다.
    nicknameInput.addEventListener("input", function () {
        state.nickname = nicknameInput.value;
    });

    joinBtn.addEventListener("click", function () {
        state.participants.push(state.nickname);
        localStorage.setItem('participants', JSON.stringify(state.participants));
        renderApp();  // 상태가 변경되면 앱을 다시 렌더링합니다.
    });

    editor.addEventListener("input", function () {
        state.editorContent = editor.value;
        localStorage.setItem('editorContent', state.editorContent);
    });
}

// DOM이 완전히 로드된 후 앱을 렌더링합니다.
document.addEventListener("DOMContentLoaded", function () {
    renderApp();
});
