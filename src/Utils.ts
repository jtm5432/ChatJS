/**
 * onClick 함수가 할당 된 버튼을 만들어줌
 * @param {string} buttonText - Text.
 * @param {Function} callback - Function 
 * @returns {HTMLButtonElement} - created button element.
 */
export function createButton(buttonText: string, callback: () => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.innerText = buttonText;
    button.addEventListener('click', callback);
    return button;
}
type ModalCallback = (modal: HTMLElement) => void;

/**
 * 주어진 파일 이름으로 모달을 비동기 방식으로 로드합니다.
 * 
 * 해당 함수는 주어진 파일 이름의 HTML을 가져와서 페이지에 삽입합니다.
 * 모달, 열기 버튼, 닫기 버튼의 동작도 함께 설정합니다.
 * 
 * @async
 * @function
 * @param {string} modalFileName - 불러올 모달의 파일 이름입니다.
 * @returns {Promise<void>}
 * 
 * @throws {Error} 모달을 불러오는데 실패할 경우 에러를 발생시킵니다.
 */
export async function loadModal(modalFileName: string,  afterLoadCallback?: ModalCallback): Promise<void> {
    try {
        // 모달 경로
        const fullPath = `../views/${modalFileName}`;

        /** @type {Response} */
        const response = await fetch(fullPath);

        /** @type {string} */
        const modalText = await response.text();
        document.body.insertAdjacentHTML('beforeend', modalText);
        
        /** @type {HTMLElement | null} */
        const modal = document.getElementById('myModal');

     
        /** @type {HTMLElement | null} */
        const span = document.getElementById('closeModalBtn');
        modal.style.display = "block";
        if ( modal && span) {
           

            span.onclick = function(): void {
                modal.style.display = "none";
            }

            window.onclick = function(event: Event): void {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        }
        if(afterLoadCallback)afterLoadCallback(modal);
    } catch (error: any) {
        console.error("모달을 불러오는데 실패했습니다.", error);
    }
}

