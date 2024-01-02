-- CreateTable
CREATE TABLE "restaurants" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price_range" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dummy_reviews" (
    "id" BIGSERIAL NOT NULL,
    "author" VARCHAR(25) NOT NULL,
    "title" VARCHAR(25) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "rating" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" VARCHAR(25) NOT NULL,
    "restaurant" VARCHAR(25) NOT NULL,

    CONSTRAINT "dummy_reviews_pkey" PRIMARY KEY ("id")
);
