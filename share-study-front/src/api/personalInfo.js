import request from '@/utils/request'

export function updateAvatar(oldAvatar,file) {
    return request({
        url: 'personalInfo/updateAvatar',
        method: 'post',
        params: {"oldAvatar":oldAvatar},
        data:file
    })
}

export function updateBonusPoints(num) {
    return request({
        url: 'personalInfo/updateBonusPoints',
        method: 'post',
        params: {"changeNum":num},
    })
}