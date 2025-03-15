#1/bin/bash
echo "Добавляю файлы в индексацию"
git add .
echo "Фиксируем изменения"
git commit -m "Autocommit"
echo "Отправляем на удаленный репозиторий..."
git push origin "$1"
echo "Готово!"