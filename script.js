// 타로 카드 데이터
const tarotCards = [
    // 메이저 아르카나 (22장)
    {
        name: "광대",
        image: "images/tarot/fool.jpg",
        interpretation: "🐾멍멍! 새로운 모험을 시작할 때예요! 낯선 길을 탐험하는 건 정말 신나는 일이죠. 하지만 조심해야 해요, 가끔은 위험할 수도 있거든요."
    },
    {
        name: "마법사",
        image: "images/tarot/magician.jpg",
        interpretation: "🐾왈왈! 당신의 재능을 발견했어요! 장난감을 잘 가지고 노는 것처럼, 당신의 능력을 잘 활용하면 원하는 것을 이룰 수 있어요."
    },
    {
        name: "여사제",
        image: "images/tarot/high-priestess.jpg",
        interpretation: "🐾멍멍! 당신의 직감을 믿어보세요! 우리 강아지들도 가끔 이상한 느낌이 들 때가 있는데, 그게 맞을 때가 많아요."
    },
    {
        name: "여황제",
        image: "images/tarot/empress.jpg",
        interpretation: "🐾왈왈! 따뜻한 보살핌이 필요해요! 엄마 강아지가 새끼들을 돌보는 것처럼, 당신도 누군가의 보살핌이 필요할 때예요."
    },
    {
        name: "황제",
        image: "images/tarot/emperor.jpg",
        interpretation: "🐾멍멍! 리더십을 발휘할 때예요! 우리 무리의 알파 강아지처럼, 당신도 이끄는 역할을 잘 할 수 있어요."
    },
    {
        name: "교황",
        image: "images/tarot/hierophant.jpg",
        interpretation: "🐾왈왈! 전통과 규칙을 따르는 게 좋아요! 우리도 산책 시간, 식사 시간이 정해져 있듯이, 규칙은 중요해요."
    },
    {
        name: "연인들",
        image: "images/tarot/lovers.jpg",
        interpretation: "🐾멍멍! 사랑과 우정의 시간이에요! 우리도 친구들과 잘 지내는 게 행복하듯이, 당신도 좋은 관계를 맺을 수 있어요."
    },
    {
        name: "전차",
        image: "images/tarot/chariot.jpg",
        interpretation: "🐾왈왈! 목표를 향해 달려가세요! 우리도 산책할 때 목적지까지 열심히 뛰어가듯이, 당신도 이겨낼 수 있어요."
    },
    {
        name: "힘",
        image: "images/tarot/strength.jpg",
        interpretation: "🐾멍멍! 내면의 힘을 믿어보세요! 우리도 작은 몸으로 큰 용기를 낼 수 있듯이, 당신도 할 수 있어요."
    },
    {
        name: "은둔자",
        image: "images/tarot/hermit.jpg",
        interpretation: "🐾왈왈! 혼자만의 시간이 필요해요! 우리도 가끔 혼자 쉬고 싶을 때가 있듯이, 당신도 휴식이 필요해요."
    },
    {
        name: "운명의 수레바퀴",
        image: "images/tarot/wheel-of-fortune.jpg",
        interpretation: "🐾멍멍! 운명의 변화가 올 거예요! 우리도 좋은 날과 나쁜 날이 있듯이, 인생은 계속 변해요."
    },
    {
        name: "정의",
        image: "images/tarot/justice.jpg",
        interpretation: "🐾왈왈! 공정한 판단이 필요해요! 우리도 장난감을 나눠가질 때 공평하게 나눠야 하듯이, 정의로워야 해요."
    },
    {
        name: "매달린 사람",
        image: "images/tarot/hanged-man.jpg",
        interpretation: "🐾멍멍! 새로운 관점이 필요해요! 우리도 가끔 엎드려서 세상을 다르게 보듯이, 다른 시각으로 보세요."
    },
    {
        name: "죽음",
        image: "images/tarot/death.jpg",
        interpretation: "🐾왈왈! 변화의 시간이에요! 우리도 털갈이를 하듯이, 새로운 시작을 할 때예요."
    },
    {
        name: "절제",
        image: "images/tarot/temperance.jpg",
        interpretation: "🐾멍멍! 균형을 찾아야 해요! 우리도 식사량을 조절해야 하듯이, 적절함이 중요해요."
    },
    {
        name: "악마",
        image: "images/tarot/devil.jpg",
        interpretation: "🐾왈왈! 유혹을 조심하세요! 우리도 맛있는 음식에 자꾸 눈이 가듯이, 나쁜 습관을 버려야 해요."
    },
    {
        name: "탑",
        image: "images/tarot/tower.jpg",
        interpretation: "🐾멍멍! 갑작스러운 변화가 올 거예요! 우리도 갑자기 천둥소리에 놀라듯이, 예상치 못한 일이 생길 수 있어요."
    },
    {
        name: "별",
        image: "images/tarot/star.jpg",
        interpretation: "🐾왈왈! 희망이 보여요! 우리도 밤하늘의 별을 보며 꼬리를 흔들듯이, 좋은 일이 올 거예요."
    },
    {
        name: "달",
        image: "images/tarot/moon.jpg",
        interpretation: "🐾멍멍! 직감을 믿으세요! 우리도 밤에 이상한 소리에 경계하듯이, 당신의 직감이 맞을 거예요."
    },
    {
        name: "태양",
        image: "images/tarot/sun.jpg",
        interpretation: "🐾왈왈! 행복한 시간이에요! 우리도 햇빛 아래서 뒹굴듯이, 즐거운 날이 올 거예요."
    },
    {
        name: "심판",
        image: "images/tarot/judgement.jpg",
        interpretation: "🐾멍멍! 새로운 깨달음이 있어요! 우리도 주인의 목소리에 깜짝 놀라듯이, 중요한 메시지를 받을 거예요."
    },
    {
        name: "세계",
        image: "images/tarot/world.jpg",
        interpretation: "🐾왈왈! 완성의 시간이에요! 우리도 산책을 마치고 집에 돌아오듯이, 목표를 이룰 수 있어요."
    },
    // 마이너 아르카나 (56장)
    // 완드 스위트 (14장)
    {
        name: "완드의 에이스",
        image: "images/tarot/wands-ace.jpg",
        interpretation: "🐾멍멍! 새로운 시작이에요! 우리도 새로운 장난감을 받았을 때처럼 신나요."
    },
    {
        name: "완드의 2",
        image: "images/tarot/wands-2.jpg",
        interpretation: "🐾왈왈! 선택의 기로에 서있어요! 우리도 산책할 때 어느 길로 갈지 고민하듯이, 결정을 내려야 해요."
    },
    {
        name: "완드의 3",
        image: "images/tarot/wands-3.jpg",
        interpretation: "🐾멍멍! 먼 곳을 바라보고 있어요! 우리도 창가에서 멀리 있는 친구를 기다리듯이, 미래를 기대해요."
    },
    {
        name: "완드의 4",
        image: "images/tarot/wands-4.jpg",
        interpretation: "🐾왈왈! 안정을 찾았어요! 우리도 편안한 침대에서 쉬듯이, 만족스러운 상태예요."
    },
    {
        name: "완드의 5",
        image: "images/tarot/wands-5.jpg",
        interpretation: "🐾멍멍! 경쟁이 있어요! 우리도 장난감을 가지고 다투듯이, 약간의 갈등이 있을 수 있어요."
    },
    {
        name: "완드의 6",
        image: "images/tarot/wands-6.jpg",
        interpretation: "🐾왈왈! 승리가 있어요! 우리도 장난감 뽑기에서 이겼을 때처럼 기뻐요."
    },
    {
        name: "완드의 7",
        image: "images/tarot/wands-7.jpg",
        interpretation: "🐾멍멍! 도전이 있어요! 우리도 높은 장난감 상자에 도전하듯이, 어려운 일에 맞서야 해요."
    },
    {
        name: "완드의 8",
        image: "images/tarot/wands-8.jpg",
        interpretation: "🐾왈왈! 빠른 변화가 있어요! 우리도 갑자기 산책 나가자고 할 때처럼 신속하게 움직여야 해요."
    },
    {
        name: "완드의 9",
        image: "images/tarot/wands-9.jpg",
        interpretation: "🐾멍멍! 준비가 되어있어요! 우리도 산책 가방이 준비되면 꼬리를 흔들듯이, 모든 것이 준비됐어요."
    },
    {
        name: "완드의 10",
        image: "images/tarot/wands-10.jpg",
        interpretation: "🐾왈왈! 부담이 있어요! 우리도 목줄이 너무 타이트할 때처럼, 스트레스를 받고 있어요."
    },
    {
        name: "완드의 시종",
        image: "images/tarot/wands-page.jpg",
        interpretation: "🐾멍멍! 새로운 소식이 있어요! 우리도 우편 배달부가 오면 신나듯이, 좋은 소식이 올 거예요."
    },
    {
        name: "완드의 기사",
        image: "images/tarot/wands-knight.jpg",
        interpretation: "🐾왈왈! 변화가 올 거예요! 우리도 새로운 친구가 놀러 오면 신나듯이, 새로운 변화가 있어요."
    },
    {
        name: "완드의 여왕",
        image: "images/tarot/wands-queen.jpg",
        interpretation: "🐾멍멍! 따뜻한 에너지가 있어요! 우리도 엄마 강아지처럼 따뜻하고 보호적인 느낌이에요."
    },
    {
        name: "완드의 왕",
        image: "images/tarot/wands-king.jpg",
        interpretation: "🐾왈왈! 리더십이 필요해요! 우리도 무리의 알파 강아지처럼 이끄는 역할을 해야 해요."
    },
    // 컵 스위트 (14장)
    {
        name: "컵의 에이스",
        image: "images/tarot/cups-ace.jpg",
        interpretation: "🐾멍멍! 사랑이 넘쳐요! 우리도 주인을 보면 꼬리를 흔들듯이, 행복한 감정이 가득해요."
    },
    {
        name: "컵의 2",
        image: "images/tarot/cups-2.jpg",
        interpretation: "🐾왈왈! 우정이 생겨요! 우리도 다른 강아지와 친구가 되듯이, 새로운 관계가 시작돼요."
    },
    {
        name: "컵의 3",
        image: "images/tarot/cups-3.jpg",
        interpretation: "🐾멍멍! 즐거운 모임이 있어요! 우리도 강아지 공원에서 친구들과 놀듯이, 행복한 시간이에요."
    },
    {
        name: "컵의 4",
        image: "images/tarot/cups-4.jpg",
        interpretation: "🐾왈왈! 약간의 우울함이 있어요! 우리도 주인이 집을 비웠을 때처럼, 외로움을 느껴요."
    },
    {
        name: "컵의 5",
        image: "images/tarot/cups-5.jpg",
        interpretation: "🐾멍멍! 실망이 있어요! 우리도 장난감이 망가졌을 때처럼, 약간의 슬픔이 있어요."
    },
    {
        name: "컵의 6",
        image: "images/tarot/cups-6.jpg",
        interpretation: "🐾왈왈! 추억이 생각나요! 우리도 어릴 때 사진을 보듯이, 과거의 행복한 기억이 떠올라요."
    },
    {
        name: "컵의 7",
        image: "images/tarot/cups-7.jpg",
        interpretation: "🐾멍멍! 선택의 기로에 서있어요! 우리도 여러 장난감 중에서 고르듯이, 결정을 내려야 해요."
    },
    {
        name: "컵의 8",
        image: "images/tarot/cups-8.jpg",
        interpretation: "🐾왈왈! 변화가 필요해요! 우리도 새로운 장난감을 원하듯이, 새로운 것을 찾아야 해요."
    },
    {
        name: "컵의 9",
        image: "images/tarot/cups-9.jpg",
        interpretation: "🐾멍멍! 만족스러워요! 우리도 배가 부르고 편안할 때처럼, 행복해요."
    },
    {
        name: "컵의 10",
        image: "images/tarot/cups-10.jpg",
        interpretation: "🐾왈왈! 가족의 행복이 있어요! 우리도 가족들과 함께 있을 때처럼, 따뜻한 시간이에요."
    },
    {
        name: "컵의 시종",
        image: "images/tarot/cups-page.jpg",
        interpretation: "🐾멍멍! 새로운 감정이 생겨요! 우리도 새로운 친구를 만났을 때처럼, 설렘을 느껴요."
    },
    {
        name: "컵의 기사",
        image: "images/tarot/cups-knight.jpg",
        interpretation: "🐾왈왈! 로맨틱한 만남이 있어요! 우리도 이성 강아지를 만났을 때처럼, 설렘을 느껴요."
    },
    {
        name: "컵의 여왕",
        image: "images/tarot/cups-queen.jpg",
        interpretation: "🐾멍멍! 따뜻한 마음을 가졌어요! 우리도 새끼들을 돌보는 엄마 강아지처럼, 보살핌이 필요해요."
    },
    {
        name: "컵의 왕",
        image: "images/tarot/cups-king.jpg",
        interpretation: "🐾왈왈! 감정적 성숙이 필요해요! 우리도 어른 강아지처럼, 감정을 잘 다스려야 해요."
    },
    // 소드 스위트 (14장)
    {
        name: "소드의 에이스",
        image: "images/tarot/swords-ace.jpg",
        interpretation: "🐾멍멍! 새로운 아이디어가 떠올라요! 우리도 새로운 장난감을 발견했을 때처럼 신나요."
    },
    {
        name: "소드의 2",
        image: "images/tarot/swords-2.jpg",
        interpretation: "🐾왈왈! 평화가 필요해요! 우리도 다른 강아지와 다툰 후 화해할 때처럼, 평화를 찾아야 해요."
    },
    {
        name: "소드의 3",
        image: "images/tarot/swords-3.jpg",
        interpretation: "🐾멍멍! 마음의 상처가 있어요! 우리도 주인에게 혼났을 때처럼, 마음이 아파요."
    },
    {
        name: "소드의 4",
        image: "images/tarot/swords-4.jpg",
        interpretation: "🐾왈왈! 휴식이 필요해요! 우리도 장난감 놀이 후 쉴 때처럼, 휴식을 취해야 해요."
    },
    {
        name: "소드의 5",
        image: "images/tarot/swords-5.jpg",
        interpretation: "🐾멍멍! 갈등이 있어요! 우리도 장난감을 가지고 다툴 때처럼, 약간의 다툼이 있어요."
    },
    {
        name: "소드의 6",
        image: "images/tarot/swords-6.jpg",
        interpretation: "🐾왈왈! 변화가 필요해요! 우리도 새로운 집으로 이사할 때처럼, 새로운 시작이 필요해요."
    },
    {
        name: "소드의 7",
        image: "images/tarot/swords-7.jpg",
        interpretation: "🐾멍멍! 속임수를 조심하세요! 우리도 낯선 사람의 간식을 조심하듯이, 주의해야 해요."
    },
    {
        name: "소드의 8",
        image: "images/tarot/swords-8.jpg",
        interpretation: "🐾왈왈! 어려움이 있어요! 우리도 비 오는 날 산책 못 가는 것처럼, 약간의 어려움이 있어요."
    },
    {
        name: "소드의 9",
        image: "images/tarot/swords-9.jpg",
        interpretation: "🐾멍멍! 걱정이 많아요! 우리도 주인이 늦게 들어올 때처럼, 불안해요."
    },
    {
        name: "소드의 10",
        image: "images/tarot/swords-10.jpg",
        interpretation: "🐾왈왈! 새로운 시작이 필요해요! 우리도 새로운 장난감을 받았을 때처럼, 새로운 시작이에요."
    },
    {
        name: "소드의 시종",
        image: "images/tarot/swords-page.jpg",
        interpretation: "🐾멍멍! 새로운 소식이 있어요! 우리도 우편 배달부가 오면 신나듯이, 좋은 소식이 올 거예요."
    },
    {
        name: "소드의 기사",
        image: "images/tarot/swords-knight.jpg",
        interpretation: "🐾왈왈! 변화가 올 거예요! 우리도 새로운 친구가 놀러 오면 신나듯이, 새로운 변화가 있어요."
    },
    {
        name: "소드의 여왕",
        image: "images/tarot/swords-queen.jpg",
        interpretation: "🐾멍멍! 똑똑한 판단이 필요해요! 우리도 낯선 사람을 만났을 때처럼, 현명하게 판단해야 해요."
    },
    {
        name: "소드의 왕",
        image: "images/tarot/swords-king.jpg",
        interpretation: "🐾왈왈! 명확한 결정이 필요해요! 우리도 장난감을 고를 때처럼, 확실한 결정을 내려야 해요."
    },
    // 펜타클 스위트 (14장)
    {
        name: "펜타클의 에이스",
        image: "images/tarot/pentacles-ace.jpg",
        interpretation: "🐾멍멍! 새로운 기회가 와요! 우리도 새로운 장난감을 받았을 때처럼 신나요."
    },
    {
        name: "펜타클의 2",
        image: "images/tarot/pentacles-2.jpg",
        interpretation: "🐾왈왈! 균형이 필요해요! 우리도 장난감과 휴식을 적절히 조절하듯이, 균형을 찾아야 해요."
    },
    {
        name: "펜타클의 3",
        image: "images/tarot/pentacles-3.jpg",
        interpretation: "🐾멍멍! 성공이 있어요! 우리도 새로운 기술을 배웠을 때처럼, 성취감을 느껴요."
    },
    {
        name: "펜타클의 4",
        image: "images/tarot/pentacles-4.jpg",
        interpretation: "🐾왈왈! 안정이 필요해요! 우리도 편안한 침대에서 쉬듯이, 안정을 찾아야 해요."
    },
    {
        name: "펜타클의 5",
        image: "images/tarot/pentacles-5.jpg",
        interpretation: "🐾멍멍! 어려움이 있어요! 우리도 배가 고플 때처럼, 약간의 어려움이 있어요."
    },
    {
        name: "펜타클의 6",
        image: "images/tarot/pentacles-6.jpg",
        interpretation: "🐾왈왈! 도움이 필요해요! 우리도 주인에게 도움을 청하듯이, 도움을 받아야 해요."
    },
    {
        name: "펜타클의 7",
        image: "images/tarot/pentacles-7.jpg",
        interpretation: "🐾멍멍! 인내가 필요해요! 우리도 산책 시간을 기다리듯이, 참아야 해요."
    },
    {
        name: "펜타클의 8",
        image: "images/tarot/pentacles-8.jpg",
        interpretation: "🐾왈왈! 열심히 일해야 해요! 우리도 새로운 기술을 배울 때처럼, 노력이 필요해요."
    },
    {
        name: "펜타클의 9",
        image: "images/tarot/pentacles-9.jpg",
        interpretation: "🐾멍멍! 안락함이 있어요! 우리도 편안한 침대에서 쉬듯이, 만족스러워요."
    },
    {
        name: "펜타클의 10",
        image: "images/tarot/pentacles-10.jpg",
        interpretation: "🐾왈왈! 가족의 행복이 있어요! 우리도 가족들과 함께 있을 때처럼, 따뜻한 시간이에요."
    },
    {
        name: "펜타클의 시종",
        image: "images/tarot/pentacles-page.jpg",
        interpretation: "🐾멍멍! 새로운 배움이 있어요! 우리도 새로운 기술을 배울 때처럼, 배움의 기회가 와요."
    },
    {
        name: "펜타클의 기사",
        image: "images/tarot/pentacles-knight.jpg",
        interpretation: "🐾왈왈! 안정적인 변화가 있어요! 우리도 새로운 집으로 이사할 때처럼, 안정적인 변화가 있어요."
    },
    {
        name: "펜타클의 여왕",
        image: "images/tarot/pentacles-queen.jpg",
        interpretation: "🐾멍멍! 풍요로움이 있어요! 우리도 맛있는 간식을 받았을 때처럼, 풍요로워요."
    },
    {
        name: "펜타클의 왕",
        image: "images/tarot/pentacles-king.jpg",
        interpretation: "🐾왈왈! 안정적인 리더십이 필요해요! 우리도 무리의 알파 강아지처럼, 안정적으로 이끌어야 해요."
    }
];

// DOM 요소
const cardsFan = document.querySelector('.cards-fan');
const modal = document.getElementById('cardModal');
const modalCard = modal.querySelector('.modal-card');
const cardImage = document.getElementById('cardImage');
const cardName = document.getElementById('cardName');
const cardInterpretation = document.getElementById('cardInterpretation');
const closeModal = document.querySelector('.close-modal');

// 디버깅을 위한 로그
console.log('DOM 요소:', { cardsFan, modal, modalCard, cardImage, cardName, cardInterpretation });

// 현재 선택된 카드
let currentCard = null;
let displayedCards = [];

// 10장의 카드 생성
function createCards() {
    // 랜덤으로 10장의 카드 선택
    displayedCards = [];
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    displayedCards = shuffledCards.slice(0, 10);

    // 카드 그리드 초기화
    cardsFan.innerHTML = '';

    // 10장의 카드 생성
    displayedCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="paw-pattern"></div>
                </div>
                <div class="card-back">
                    <img src="${card.image}" alt="${card.name}">
                </div>
            </div>
        `;

        // 카드 클릭 이벤트
        cardElement.addEventListener('click', () => {
            showCardModal(card);
        });

        cardsFan.appendChild(cardElement);
    });
}

// 모달 표시
function showCardModal(card) {
    currentCard = card;
    cardImage.src = card.image;
    cardName.textContent = card.name;
    cardInterpretation.textContent = card.interpretation;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지

    // 모달이 완전히 표시된 후 카드 뒤집기
    setTimeout(() => {
        modalCard.classList.add('flipped');
    }, 300);
}

// 모달 닫기
function closeModalHandler() {
    // 카드 뒤집기 애니메이션 제거
    modalCard.classList.remove('flipped');
    
    // 모달 닫기
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }, 300);
}

// 모달 외부 클릭 시 닫기
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// 닫기 버튼 클릭 이벤트
closeModal.addEventListener('click', closeModalHandler);

// 페이지 로드 시 초기 카드 생성
document.addEventListener('DOMContentLoaded', () => {
    console.log('페이지 로드됨');
    createCards();
}); 