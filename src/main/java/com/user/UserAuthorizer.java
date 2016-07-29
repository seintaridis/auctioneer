package com.user;

import org.springframework.stereotype.Component;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by dimitris on 7/29/16.
 */


@Component
public class UserAuthorizer {
    private Map<UUID, Long> concurrentHashMapObject = new ConcurrentHashMap<UUID, Long>();


    public void setUserSession(UUID token, Long userId) {
        concurrentHashMapObject.put(token, userId);
    }


    public Long getUserId(UUID token){
        return concurrentHashMapObject.get(token);
    }
}
