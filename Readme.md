#Обзор

Для работы приложения необходимо развернуть **Docker** контейнер с образом **redis**

    docker run -d --name some-redis -p 127.0.0.1:6379:6379 redis

Перед запуском необходимо подключиться к контейнеру и задать пары "ключ значение" типа:

    SET 1 redis
    SET 2 node.js
    SET 3 "cool program"

