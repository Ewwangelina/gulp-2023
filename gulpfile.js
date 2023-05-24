// основной модуль
import gulp from "gulp";

import { path } from "./gulp/config/path.js";

// передаем значение в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";


//наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
}

// построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher);

//вписание сценария по умолчанию
gulp.task('default', dev);

//остановить задачу комбинация CTRL+C
