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
        const existingModal = document.getElementById('myModal');
        if (existingModal) {
            existingModal.remove();
        }

        // 모달 경로
        const fullPath = `../views/${modalFileName}`;

        /** @type {Response} */
        const response = await fetch(fullPath);

        /** @type {string} */
        const modalText = await response.text();
        document.body.insertAdjacentHTML('beforeend', modalText);
          /** @type {HTMLElement | null} */
          const span = document.getElementById('closeModalBtn');
        /** @type {HTMLElement | null} */
        
        const modal = document.getElementById('myModal');
        let backdrop = document.querySelector('.backdrop') as HTMLDivElement | null;

        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.classList.add('backdrop');
            document.body.appendChild(backdrop);
        }

        document.body.appendChild(backdrop);
     
      
       // modal와 backdrop를 표시
       if (modal) modal.style.display = "block";
       if (backdrop) backdrop.style.display = "block";
        
        if (modal && span) {
            span.onclick = function(): void {
                modal.style.display = "none";
                backdrop.style.display = "none"; // Hide the backdrop
            }

            // Don't close the modal when the backdrop is clicked
            backdrop.onclick = function(event: Event): void {
                event.stopPropagation();
            }
        }
        if(afterLoadCallback)afterLoadCallback(modal);
    } catch (error: any) {
        console.error("모달을 불러오는데 실패했습니다.", error);
    }
}
/**
 * 현재 표시 중인 모달을 숨깁니다.
 * 
 * 해당 함수는 페이지에 존재하는 모달과 backdrop 요소를 찾아 숨기며, 
 * 필요한 경우 DOM에서 완전히 제거합니다.
 * 
 * @function
 */
export function hideModal(): void {
    /** @type {HTMLElement | null} */
    const modal = document.getElementById('myModal');
    /** @type {HTMLElement | null} */
    const backdrop = document.querySelector('.backdrop') as HTMLElement | null;

    // modal과 backdrop를 숨김
    if (modal) modal.style.display = "none";
    if (backdrop) backdrop.style.display = "none";

    
}

/**
 * 새로운 window 창이 완전히 로드될 때까지 기다립니다.
 * 
 * @param {Window | null} newWindow - 로드를 기다리는 대상 window 객체.
 * @returns {Promise<void>} window가 완전히 로드될 때 resolve되는 promise.
 * @throws {Error} 제공된 newWindow가 null인 경우.
 */
export function waitForWindowToLoad(newWindow: Window | null): Promise<void> {
    return new Promise((resolve, reject) => {
        if (!newWindow) {
            reject(new Error("newWindow is null"));
            return;
        }

        const checkWindowLoaded = setInterval(() => {
            if (newWindow.document.readyState === 'complete') {
                clearInterval(checkWindowLoaded);
                resolve();
            }
        }, 100);
    });
}



