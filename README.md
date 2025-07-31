# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker-compose up -d
```

2. Crear una copia del .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ``` npm install ```
5. Ejecutar los comandos de Prisma
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
6. Ejecutar el comando 
7. Ejecutar el SEED (postman) para [crear la base de datos local](localhost:3000/api/seed)



# Prod


# Stage