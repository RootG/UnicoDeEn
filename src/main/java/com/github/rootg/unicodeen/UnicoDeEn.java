package com.github.rootg.unicodeen;

import spark.Service;

import java.util.Date;

public class UnicoDeEn {
    private static final String PORT = System.getenv("PORT");
    private static final int EXPIRE_TIME_SECONDS = 600;

    public static void main(String[] args) {
        Service service = Service.ignite();
        if (System.getenv("PORT") != null) {
            service.port(Integer.parseInt(PORT));
        }
        service.staticFiles.header("Cache-Control", "public, max-age=" + EXPIRE_TIME_SECONDS);
        service.staticFiles.header("Expires",
                new Date(System.currentTimeMillis() + EXPIRE_TIME_SECONDS * 1000).toString());
        service.staticFileLocation("public");
        service.init();
    }
}
