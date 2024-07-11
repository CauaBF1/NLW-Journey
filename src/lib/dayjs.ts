import dayjs from "dayjs";
import localizedFormart from "dayjs/plugin/localizedFormat";
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')
dayjs.extend(localizedFormart)


export {dayjs}