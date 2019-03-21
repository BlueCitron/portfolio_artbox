export const state = {
  categories: [{
    id: 1,
    name: '인형/토이'
  },{
    id: 2,
    name: '문구'
  },{
    id: 3,
    name: '패션'
  },{
    id: 4,
    name: '주방/욕실'
  },{
    id: 5,
    name: '리빙/데코'
  },{
    id: 6,
    name: '디지털/가전'
  },{
    id: 7,
    name: '여행'
  },{
    id: 8,
    name: '뷰티'
  },],
  divisions: [
    { id: 1, name: '쿠션인형',    categoryId: 1 },
    { id: 2, name: '미니인형',    categoryId: 1 },
    { id: 3, name: '피규어',      categoryId: 1 },
    { id: 4, name: 'FUN / TOY',   categoryId: 1 },
    { id: 5, name: 'DIY 취미',    categoryId: 1 },
    { id: 6, name: '다이어리 / 플래너',    categoryId: 2 },
    { id: 7, name: '캘린더',    categoryId: 2 },
    { id: 8, name: '노트 / 메모',    categoryId: 2 },
    { id: 9, name: '점착메모지',    categoryId: 2 },
    { id: 10, name: '필기구',    categoryId: 2 },
    { id: 11, name: '필통',    categoryId: 2 },
    { id: 12, name: '스티커 / 스탬프',    categoryId: 2 },
    { id: 13, name: '앨범',    categoryId: 2 },
    { id: 14, name: '파일',    categoryId: 2 },
    { id: 15, name: '데스크소품',    categoryId: 2 },
    { id: 16, name: '편지지 / 편지봉투',    categoryId: 2 },
    { id: 17, name: '선물포장',    categoryId: 2 },
    { id: 18, name: '지갑 / 파우치',    categoryId: 3 },
    { id: 19, name: '장갑 / 양말',    categoryId: 3 },
    { id: 20, name: '키링 / 뱃지 / 와펜',    categoryId: 3 },
    { id: 21, name: '타투스티커',    categoryId: 3 },
    { id: 22, name: '슬리퍼',    categoryId: 3 },
    { id: 23, name: '패션잡화',    categoryId: 3 },
    { id: 24, name: '가방',    categoryId: 3 },
    { id: 25, name: '헤어브러쉬',    categoryId: 3 },
    { id: 26, name: '우산',    categoryId: 3 },
    { id: 27, name: '여름소품',    categoryId: 3 },
    { id: 28, name: '텀블러',    categoryId: 4 },
    { id: 29, name: '컵/머그/잔',    categoryId: 4 },
    { id: 30, name: '술잔',    categoryId: 4 },
    { id: 31, name: '도시락용기',    categoryId: 4 },
    { id: 32, name: '기타 주방용품',    categoryId: 4 },
    { id: 33, name: '칫솔케이스/살균기',    categoryId: 4 },
    { id: 34, name: '욕실용품',    categoryId: 4 },
    { id: 35, name: '시계',    categoryId: 5 },
    { id: 36, name: '조명',    categoryId: 5 },
    { id: 37, name: '디퓨저/방향제',    categoryId: 5 },
    { id: 38, name: '거울',    categoryId: 5 },
    { id: 39, name: '방석/쿠션',    categoryId: 5 },
    { id: 40, name: '인테리어소품',    categoryId: 5 },
    { id: 41, name: '패브릭 소품',    categoryId: 5 },
    { id: 42, name: '생활소품',    categoryId: 5 },
    { id: 43, name: '가습기',    categoryId: 6 },
    { id: 44, name: '스마트폰 액세서리',    categoryId: 6 },
    { id: 45, name: 'PC 액세서리',    categoryId: 6 },
    { id: 46, name: '드라이어/고데기',    categoryId: 6 },
    { id: 47, name: '보조배터리',    categoryId: 6 },
    { id: 48, name: '이어폰/스피커',    categoryId: 6 },
    { id: 49, name: 'USB',    categoryId: 6 },
    { id: 50, name: '기타 생활가전',    categoryId: 6 },
    { id: 51, name: '캐리어/트래블랙',    categoryId: 7 },
    { id: 52, name: '여행용파우치',    categoryId: 7 },
    { id: 53, name: '여행용품',    categoryId: 7 },
    { id: 54, name: '여권케이스/러기지택',    categoryId: 7 },
    { id: 55, name: '차량용품',    categoryId: 7 },
    { id: 56, name: '핫팩',    categoryId: 7 },
    { id: 57, name: '페이스메이크업',    categoryId: 8 },
    { id: 58, name: '아이메이크업',    categoryId: 8 },
    { id: 59, name: '립 메이크업',    categoryId: 8 },
    { id: 60, name: '미용소품',    categoryId: 8 },
    { id: 61, name: '스킨케어',    categoryId: 8 },
    { id: 62, name: '마스크/팩',    categoryId: 8 },
    { id: 63, name: '클렌징',    categoryId: 8 },
    { id: 64, name: '선케어',    categoryId: 8 },
    { id: 65, name: '바디케어',    categoryId: 8 },
  ],
  category: {
    id: 1,
    name: '인형/토이'
  },
}

export const getters = {
  GET_CURRENT_DIVISIONS: state => state.divisions.filter(division => division.categoryId == state.category.id),
}

export const actions = {

}

export const mutations = {
  SET_CATEGORIES (state, data) {
    state.categories = data
  },
  SET_DIVISIONS (state, data) {
    state.divisions = data
  },
  SET_CATEGORY (state, data) {
    state.category = data
  },
}
