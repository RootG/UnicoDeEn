package com.github.rootg.unicodeen;

import spark.Service;

import java.util.Date;

public class UnicoDeEn {
    public static void main(String[] args) {
        Service service = Service.ignite();
        int expireTimeSeconds = 600;
        service.staticFiles.header("Cache-Control", "public, max-age=" + expireTimeSeconds);
        service.staticFiles.header("Expires",
                new Date(System.currentTimeMillis() + expireTimeSeconds * 1000).toString());
        service.staticFileLocation("public");
        service.init();
    }
}
