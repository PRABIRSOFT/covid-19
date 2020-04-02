import Api from '@/services/Api'

function getLatestStat () {
  return Api().get('get_live_data')
}

export { getLatestStat }