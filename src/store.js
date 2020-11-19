import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebarFold: false, // 侧边栏, 折叠状态
        info: {}, // 当前网页信息
        authList: [],
        visitedViews: [],
        cachedViews: [],
        entList: [
            {
                num: '01',
                enterpriseName: '山西锦华汽车销售服务有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '1',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '1',
                enterpriseOwner: '特斯拉',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '万柏林区来宾路1-2号',
                createTime: '2020-01-09 18:00:00'
            },
            {
                num: '02',
                enterpriseName: '太原市鑫晟汽车服务有限公司',
                enterpriseAreaStr: '清徐县',
                enterpriseBusinessCategory: '2',
                enterpriseRecordTypeStr: '备案变更',
                enterpriseSource: '2',
                enterpriseOwner: '海蒂',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '清徐县西湖路10-1号',
                createTime: '2020-01-09 18:00:00'
            },
            {
                num: '03',
                enterpriseName: '太原市百瑞斯汽车维修有限公司',
                enterpriseAreaStr: '晋源区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '拉玛',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '晋源区民主大道11-11号',
                createTime: '2020-01-09 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '车大夫汽车维修服务有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '05',
                enterpriseName: '太原市尖草坪区广聚鑫修理厂',
                enterpriseAreaStr: '尖草坪区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '贺秀莲',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '尖草坪区民主大道11-11号',
                createTime: '2020-01-09 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西彩虹上通汽贸有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西显通汽车销售有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '太原市裕龙顺达汽车销售服务有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '万柏林区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '太原陆鼎汽车维修有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区金马花园5-1号',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西昌安达汽车销售服务有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '万柏林区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西黄河科技开发有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '逻辑',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西普洋汽车销售有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '万柏林区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '太原市红菱进口汽车维修有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西盛新晋汽车维修有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '晋源区',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '晋源区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '太原市盛世开元汽车销售有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '万柏林区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西普洋汽车销售有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '万柏林区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西智菱行汽车销售服务有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '太原华瑞富星汽车销售服务有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '太原钢运物流股份有限公司',
                enterpriseAreaStr: '万柏林区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '尖草坪区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            },
            {
                num: '04',
                enterpriseName: '山西友通汽车贸易有限公司',
                enterpriseAreaStr: '小店区',
                enterpriseBusinessCategory: '3',
                enterpriseRecordTypeStr: '初次备案',
                enterpriseSource: '3',
                enterpriseOwner: '白灵灵',
                enterpriseOwnerPhone: '13265477781',
                enterpriseDetailedAddress: '小店区白云路与三环路丁字路口',
                createTime: '2020-04-06 18:00:00'
            }
        ],
        regionList: [
            {
                regionName: '万柏林区',
                regionId: '万柏林区'
            },
            {
                regionName: '清徐县',
                regionId: '清徐县'
            },
            {
                regionName: '晋源区',
                regionId: '晋源区'
            },
            {
                regionName: '小店区',
                regionId: '小店区'
            },
            {
                regionName: '尖草坪区',
                regionId: '尖草坪区'
            }
        ],
        headerStatus: false, // 头部状态
        tagStatus: false, // 标签页状态
        activeTab: 'home' // 当前选中的tab
    },
    mutations: {
        setAuthList (state, val) {
            state.authList = val
        },
        setInfo (state, val) {
            state.info = val
        },
        // 设置当前选中tab
        setActiveTab (state, val) {
            console.log('setActiveTab')
            state.activeTab = val
        },
        // 设置头部状态
        setHeaderStatus (state, val) {
            state.headerStatus = val
        },
        // 设置标签页状态
        setTagStatus (state, val) {
            state.tagStatus = val
        },
        ADD_VISITED_VIEW: (state, view) => {
            if (/login/.test(view.path)) return
            if (/redirect/.test(view.path)) return
            if (state.visitedViews.some(v => v.path === view.path)) return
            state.visitedViews.push(
                Object.assign({}, view, {
                    title: view.meta.title || 'no-name'
                })
            )
        },
        ADD_CACHED_VIEW: (state, view) => {
            if (/login/.test(view.name)) return
            if (state.cachedViews.includes(view.name)) return
            if (!view.meta.noCache) {
                state.cachedViews.push(view.name)
            }
        },

        DEL_VISITED_VIEW: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews.splice(i, 1)
                    break
                }
            }
        },
        DEL_CACHED_VIEW: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews.splice(index, 1)
                    break
                }
            }
        },

        DEL_OTHERS_VISITED_VIEWS: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews = state.visitedViews.slice(i, i + 1)
                    break
                }
            }
        },
        DEL_OTHERS_CACHED_VIEWS: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews = state.cachedViews.slice(
                        index,
                        index + 1
                    )
                    break
                }
            }
        },

        DEL_ALL_VISITED_VIEWS: state => {
            state.visitedViews = []
        },
        DEL_ALL_CACHED_VIEWS: state => {
            state.cachedViews = []
        },

        UPDATE_VISITED_VIEW: (state, view) => {
            for (let v of state.visitedViews) {
                if (v.path === view.path) {
                    v = Object.assign(v, view)
                    break
                }
            }
        }
    },
    actions: {
        addView ({ dispatch }, view) {
            dispatch('addVisitedView', view)
            dispatch('addCachedView', view)
        },
        addVisitedView ({ commit }, view) {
            commit('ADD_VISITED_VIEW', view)
        },
        addCachedView ({ commit }, view) {
            commit('ADD_CACHED_VIEW', view)
        },
        delView ({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delVisitedView', view)
                dispatch('delCachedView', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delVisitedView ({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_VISITED_VIEW', view)
                resolve([...state.visitedViews])
            })
        },
        delCachedView ({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_CACHED_VIEW', view)
                resolve([...state.cachedViews])
            })
        },

        delOthersViews ({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delOthersVisitedViews', view)
                dispatch('delOthersCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delOthersVisitedViews ({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_VISITED_VIEWS', view)
                resolve([...state.visitedViews])
            })
        },
        delOthersCachedViews ({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_CACHED_VIEWS', view)
                resolve([...state.cachedViews])
            })
        },
        delAllViews ({ dispatch, state, commit }, view) {
            return new Promise(resolve => {
                commit('setActiveTab', 'home')
                dispatch('delAllVisitedViews', view)
                dispatch('delAllCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delAllVisitedViews ({ commit, state }) {
            return new Promise(resolve => {
                commit('DEL_ALL_VISITED_VIEWS')
                resolve([...state.visitedViews])
            })
        },
        delAllCachedViews ({ commit, state }) {
            return new Promise(resolve => {
                commit('DEL_ALL_CACHED_VIEWS')
                resolve([...state.cachedViews])
            })
        },

        updateVisitedView ({ commit }, view) {
            commit('UPDATE_VISITED_VIEW', view)
        }
    }
})
