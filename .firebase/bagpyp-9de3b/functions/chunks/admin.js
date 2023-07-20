import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "bagpyp-9de3b";
const FB_CLIENT_EMAIL = "firebase-adminsdk-nklsp@bagpyp-9de3b.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDfTUlpIPE4PqQg\nFB4kIozB1FlaNZbTcR4+0ezxsfb95po0SUyvITj70z8CVoYWTdjPzD8KN0cvvfmo\npBQ3ZYVoamNNrC6TUnCOI4/EwwUQUT1EdsqzihU+nPQxNwkTeAcM64SYgeLzTcIb\nv8iM7qL6puBKMWiBGrZHIR6s5JsW/eLlFULLadC5Mw7ALEuRdpDR/BuPEzlrYkNz\nQxK+leYe+saVhFfCXrZQ0+C2SmemLEr2R18OPK9ibGqqtuJrt6cm8d/OiShWwVdo\nzvHpAfwuE+KuIe0dTw14un9bfCr6NZiJdAX/GiNZTl0J/jZyqEl/U+qkY9o3/YVs\nxqnkPDxDAgMBAAECgf9lGEuj//k1Y/ODxZffxCr1leDeD/6FiGQPcy4fcYxHM5+c\npfkrUF8vPPQwNGJNHSSLVaABgAU6fnrVxQyVOxREfkxDxGNRtbQ/cnO97cAQVlDm\nlHr9ZzmdbAsh1nv4oUT2R6pALidEmTxhhvIrQkUgm9K8KqI/BCW1Di/ur/cgil5v\nb9vcW+xlqBRXMma4pc46GyTug9ck9fqWKybklNCHilQRnYD2BtZZFk1J++x67qKS\nSfG2+HBTiwmuakzN4jmAgFxcQE1v97/EgRIZLe9jZ8livTtghcqwRf51u0nT1Tmd\nFUvst44shIcrhK+MH/1JmV4uepzUzhue1T/w16UCgYEA/TX/E0PoTdQXMxL+LvlV\nyLsk4QAyCokTCTLdTwLEtygTThRqg/AWZZh97VYVo6tvpmDudU93gdjulP7F1wdu\npJpLLUiZQ6L8a/3APQxta/ErCi70ouiy+J9pnoCnWob0u3yG6KPpmFV1LCsBPWcJ\nDORfpwLOY2R5vdWUkUEbXIcCgYEA4cLz9lOPPaKrCknWG+Q5PW65scABRblxoi5m\nyK2bfjyUu9o9cyDZN1/uBt2yawst67LkeYe9G6chJOnkRlLfJQnVKhqQHQ1KlPnZ\nY8sFI2pSQsJ8/RUfy33y0myOPzOXxjJ1J3/TYC8zTkZ6h89MU1QTuklZZcu+qwpn\nnXGrLWUCgYA9QAuEsH+IHA7ElwqPeFbM6KAiITb5n3DQX9Jy41uMZpBM6dleMvxn\n9Pw5JgK0BatLVtU34VIqQbxspDhdLHoSLRSUTqRsXQesY8RVwCTT4JGls/gPVDS+\nuWkGI17YIh8fHx9PNR8zbzCZz4lMPhlNWgzdTGt6VXqxdfGrNVGWDwKBgQCWkKqc\nEcZqWN6xkeTV3TO/oOT/gwpWMgNzIncyR3Z4jnazgi2RZsr3f2cD9T9U3LPXiguO\ncdTRaHlWYRb5P7PKw/ACkIykk4S2LpupTnEy2WnbVFJ/h2MZF/qmE/gadpI2gNhZ\na4rRjyksfxyhDsPcnyo5B0oz9dpHwDyyaGi9cQKBgEki4if+NmJfJoULhmxO5iey\nZjFYFs/a9GzFKAYjHb85t433wTQFg7NbQtg8aJxCAoT9axD+G8PkNkLMXnRUJ4TZ\nGzxvmy7t3w/MUtJxhW1C8MdkIQwG8LiSPgRlPaZzRqFBVfonjfNzfliBOpfOwdO4\n9sTtAvIBVWUXACfb8CZt\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
