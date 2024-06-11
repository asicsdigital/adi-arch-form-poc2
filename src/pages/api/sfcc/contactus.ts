import { NextApiRequest, NextApiResponse } from "next";
import fetchOAuth2Token from "./utils/fetchOAuth2Token";
import postContactUsData from "./utils/postContactUsData";
import postAttachmentData from "./utils/postAttachmentData";
import validateReCaptcha from "./utils/captchaService";

import { CaseData, AttachmentData } from "./types";

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const body = JSON.parse(req.body); 
  let { description, email, name, subject, captchaToken } = body;
  description = description || "QC verify";
  email = email || "ptt.tester88+01@gmail.com";
  name = name || "Thu Pham local machine test2";
  subject = "Click & Collect";
  // console.log("Captcha Token", captchaToken);

  const contactUsData = {
    "SuppliedName": name,
    "Identify_Record_Type__c": "1",
    "SuppliedEmail": email,
    "SuppliedPhone": "09888888",
    "Subject": subject,
    "Description": description,
    "Origin": "Web",
    "Priority": "Medium",
    "Type": "Product Feedback",
    "External_Site_ID__c": "asics-us",
    "SFCC_URL__c": "https://sfcc-us-dev-us.dev.asics.com/us/en-us/contact-us.html",
    "Brand__c": "asics",
  };

  const imageData = {
    "records" : [
        {
          "attributes": {
            "type": "Attachment"
          },
          "Name" : "pic1.jpg",
          "Body": "UklGRuAbAABXRUJQVlA4INQbAABQZACdASoOAcsAPjEYikOiIaESaqzwIAMEsrd57BaY3EYtqi6uNcXeE/wf5De01WH6d96/yp/FS006V5R/2/9t/cD/c/M39sPZv+V/8Z7gH6Gf138z/8H8XX+A9wf4zewD+Of0f/Sf2T9//nO9F3+19QD+y/5vrFP279gD9lfSw/bn4N/2T/9X+p+A/+af2z/wfn/3AHoAep+rXvV8t3uX219jDDv2W6jvzf73/uPyk/Ln72dkvyg/vvUI9f/3/8xf7jxDoAfy3+e/4X+//tR/jf2j9tz/h9Dvs7/zPcA/WH/S/kl+//1b/1vCn+5/7H2C/53/iv9D9xHyl/7f+m/d3/i+4/6g/5H+d/cn/Ef//8B/5L/Uf9F/e/3c/xP//+sX2F/uF7J366kTXF6Ak/lQxRTjanLi9ASfyoYopxtTlxegIpVG6eDyhO83YGkdisl97aLXhCK4EBJ/KTWI/j0wurrYFQyxOIijnTNJ1DCsjdAcIJwQhNsmqfi9xvY8pgCwmB79ASLkZlIS8xMfMPSAEpzYpuoM6MXPtTI2v7YIzi/zzGtoqRco1Ys+yttXWjgBipygL6O1Q6wt0n3+bx3jDaVYM/vUsGZuFd6I77buizyF5dfmlc9JSiirUHHtww22glkXOoWSajha2E1tA8IerkulQfKv7Z+thHWLeDX8A7YIPoHW3jh3HdYcMakx9ARAKPOr2L8Hbm/uMwR7iqqyLZ/RZckJexdxVC/QJbEa8rwGq75DeE6kA5C+RCycCtyWvE6IWBNMU6TRIVHQ5i74M52aq8q6Oo+zhyPZBLxDvIlOUUBdC5FL2sC2ZecXYzD2ZZTkDwj09CH33WM44Oz9sJ3oMyE+fBSsafFv7l3BnUy6zIyE/9g6JUe3v4LjXuhyhs7dQgZHdGWeRoebtwBE2WK/jFmouLaM5/4+1brbPmZ8b8bNLhq7mNvl5gTZfXH7skwhFR8N84lH98C8ahnf+bcr5AhuuxO8qUq8/hqgJ9/wkZtv6/d4lPBSMRDo/c3l96BLgW4yueaVY0ijiOmq+bV52pCifvQEn8qGKKcbU5cXoCT+VDFFOLwAAP7/2ZwAAAAc/mIhXX0tzOvEnlMau57pXTwV6dGIci/SNuFW2gLQqjOkil8xVfX5FmLX6SCwxrTz8tA8HuWd3sd5kEpz//8rP34u3cmKiL52Bt2KYriqZrGjuKF0C7FkHHYt3sM/hL9ixQcIlmVtWfXN4aS+3nytzxecy1TNnw4V1b7vN+7Ap2Ii9UCGmVNIQTQKVLFx5SymmvnQW2TDuSkRrHFWfY7xQiE9jqUg1SwkwDxrRARNRBGsMa2FtW/Q0B5klYreotwO0m5iMcQGXyEutGY65p4A5dyqTUYadA+IInk9QJ53He3nvCi6uVSBjT2Y9567N3dgi/S47il6LGAHsoNJsytCcTTffeeejpQrrcAV7BooBD7VFVEqI28PVGEH0dcEnUr2aHVv6H/WdzPxIkkw1tIqo5SHJrSOsToQsg8BVNv/1j3ORD6+PUO463kCL1R1xwIl4CYG1EfM8tW1jHlavoh1IRr/xQw2Og4SVAQeDt6ZLoPgv/mD0tcd27+NGoS2x081+0MfL7lX4TMljPxYagyYk3IzASEYYbZkm3fcS9wmRyomZQ3gWRTp9Cew9ndP0xaSBaQuV/N5lTWMAMKFeybooLv0wtnngL2whpYDZ0nOZCMT6KMW8CP2BhLRfAaBH5vlACPH86RvDRuss806UZBSEhgTGWddPj9eW0BzBkmIQrUE9XwKhpu5ES4fynHYBfD0vvbxCfdJPs2wAtqEtVXsjZOQjjI7e8U4NyBbuB1EMVszm3p+iFwPDV5ZuXeByWKHqsjqP8Rlu7uMJ6p0VfRpw4kN7AkBksudBtJqqoYft+fz2F7ZvpoLuTZ8ruWTdxPZ6EAFv+qYGCUhyfLcDI2VqZJxuokBzmFWUdloU8EbP8Hxa4neSDOygiCuiBRWo0fcHiWBIhDcHhycw7Im0bigVrcOKjHjpMsDDpJuTVZa3/h8sDlNFw+wqii3cTqA8XVqb7jpXMHYTKlhyfnrgc6fszYffSwL4WzFJOSmsHJtUqlJH9axMleCKjbI6UDnxZnNL/mje0iG5zuJ8w41wL8TNh3Z61+liPW5TpyOykIu1AnbQbuYHlkxIAr+lPpcxEhCD3gKKpj94/S1gpahba/UoLUgjJ7dT4zhaHBXZgZL+Jd2Ux9g2HDaL2L05nsXHMNOitnLL2jeHeyUwoW39oT3bVqPHtWcoXdyWfUgCkD5QyAcwJiooQvu5uv3yb4YZK6DE9Xa/VPVzz42nit93TTfHZ8D8SbnWHofDu5j0Qif2zR57Bk3GQEwx/oxPBwZWFM7cj1QLqssEWSpmz97AoXPZaQguL4exKwa5SDYAdxY+LCOX4HKOh81muI0ekxkNi320XXgbLfvHgk9FHT/V1Tt+jqaCo5mESAPBk9kj99sD1khBrti2bJ4d6iSLWCDAjNC1kTNBwVmBOuKW/wJO0+Fkoo8N1EhGi5K3lR/T72TSOrjSx1qzYMsnaUvdlC0rNsXMxyco4KNQfmgCcbxbdO1dcpgP+CAQiQ37mGMFKP8mxPVHti8Lpo47Wk3v1+7pqGWY497jMCbctjiHb3IaVAxA302WxrEYoMslsPJBTrw0jYCyvVHxckCea7Sb/NBq/xIQ+Z1de5yZvXtaxu0Gv5YGoys+GTDbmomwKFID6HHIgQR4w/rEis7T2kGhlUXm50ayO7MP85eQbmoqInan99yifuKFr2cc5KEaJoG7RnsEdDbVWGTgbE0DevfeCRuq6wZg1AXVGHByrDDs+8Y4nsGxPQg4dCNIrN6MkZjnEcK8rBuSgNXMa53Z5nLRpTPxWgpta6lgypXQzPPtWbW77QbczeNJj9mCEgAUPWZNtOw+q4CSAC6+UTvWAFyFaJ1xpdK2K/bQRkNfXU+sfrCZ1vobZJUde/9H/5pHEGW1I1mGPvaqWh9Ua6dSf/t8H5+vFdRvTVdMVhaQ4OPl7TMgQ+PFcNQMMYpfwP3BjPVQfZNHK7FE4v7bfd5koVnUnWsHtrbzOW8UoHgL5tztajvlvObvZRcmnefaiQc2N8QYKSPw2QoUdPle1UDqbv9TDGqp2KBnhM9r0LYNOJKuZ2//7bopsIy610PpPgm5UyScP+BzgmLf/8UX+h3/lyQUtKPhQV+Pj3qB7ZbgB5iROJRolzzw4/qe2qxRw4EJV+uDlrLiRyjqVulu1RuQd/0f96FknYOIGZDjAj64LX1bfappUd6nDCRjJKOMykf3ewoKAnk8EGWb0mNjW1Z6NfK79uBEbCQJlzSSGw/WlJBFX6wZsyl3xZMhceYTzlFIkPJ3kmCMLeYz7SFHL0PVKd8RhvAmujXqTnbaTe1MMjgGD6NeWoMfkDTUuh1FGHMSaPnqNxj76KyNp0jAuNLp4Ip4krm/4QdIr5evwyrNaAavV5J0c10UgxPVJGfmX5oHnV1hrbZeUk2kVYKvg0Xw3nsVH5LceFJT1JuCWuNxxtohHGebcX7hLcWsNANgKrShYtNtafOeBI5aYrhHuWBy7K5du62JFGDm9fP9evEGSvyAwulSEGU88ckBA5GfuYQFUp0hszf/YpKSU/d+qu4NyOx6h0CHiMqDfvarY/w0FzSZGDUBiM165iw6ZEBrbmQ2k27missS4Pra9YhJ584uXy0hky2rVbK+M+hQd+YB1Ay/Q8NSKmKZkyY76WAwYbI6XkXG76BkXL7cgyvvaxp8kqji02GPB55kgwWiTtBLpCjxxzU2c+ZdAYXzPqefs7/U/+axq24gRQZp+PAmAxL/NCNSukKj5RomWAD/KIVlkkTq6WvxnES7R8v0u5Q4NQf4rtyxQVUoSMYnridKi2YoiMt8cnPShQzta3uYNrf7KDduk5Tfp7Sg9SRB1PxiE5FSvjjzCM2bFRDd3X0gjOMxD0jCJMfNGC32Uxoq46jY+cIBkUhEW3VzmdPed1dShgs2rSHVYT1tbr4F1n03+9cKhB6DD31eKIG5LvMvfMtT4TiTDTw3sOvXDweTcZu4PkjmKtmpWEWJS5Wvu8wfkOYMWWyi8uAAmaXN5ucubSRDYXeVPbbaeaZADko/T1f4mpA5fINaLkur4hLpd1TIFAnPTKkjin7PZPjdJfi1+GbeO+tBxWTBnwqur1A1q6Ye7lfRjRE8coTjwbNwbZG+wDuDPLQLzZzSBxc5OK0LbPuwgkJLaihVVbYiXnrBg5qtFxNLpHMfMMaOWNsFJAqtKEYelRC6kj1C7m9vJcPISRmCSUivhlt+AwV4bPCC4p7c+RN7uH1Qa5A96W3Zce8xqE8PwnBq7aIz295OdNBiVd8GKVQNWKjRQYGQCLXQ3z/HFtgil9EleeHOcqi5GSP/XbPzogic5zy4QvAVJj69YohsCfSInnB75jq1Z3h900Oy/+QvQeQT2PlorW/z2S3fRtbFaMom/tSLwrES8JiVYMZFh8YvSHv7miwaBlL1059qOOKxBajFDb+oVvBnYL0z0kBwe5+vmIcZwMh1ooI1s5cbfdv/UEXckrTqK5HQmlTwgZJegSnaN26djA6M5KPqRlfIbcXKgKH8IhXi5N1YSn/8Zf/QaQ84onXekKth0dtZTPbA1t0Ed2ECoT/AgW+8NcXoegIWFhOhei7aGYSEQmX5+uAPSp67QpolKzwgufQVd2p3j/zwtl21pRgxsmG5umVVoL4XQ6Lw9erY8Nk/k+oJkQC+pFlHTXq2Pm6UeLRn3bXp8W6CbyhQXech9ql1vuIlghleDJqIbzig4/IBxLcFL3hkRSw7I4Cc3w9jowuWKlYWh8CjsglHp48511GnAw6vCjmqpX0iSlMJ1pvC2xoEdZPwCHhtXPdjOwcI6A1lSwP88/JO2JGDCAf3g/8Q9jxi/iuo5Bo67XW7sKzqR/TpC6lsHSc0Pa1jZkxAWahIsHxdBOP7Gm+iqBjS+xe++P8gdMuDSrXD8Zj2/KaPhKLF/Hl7DaDNOx4QXJ4YsIIZN9Zs1PeLl4dwf/WWgbJ5DXKdOb88+Ar95QEhPtwS7q9AeWkqHHzxSS6FISmZ8qlwAeYwJxovS7BhRbd3vcXqY+Nv5y1EJ4sGy/W3dpurHWmQYKgqJ1z6eWd8idlIO2j/wAYxnOJjlwt3Zp9slxo0mdqW4XzUd21sxzJAo6Z2zI2sgpDKeKPbuAYLUAHzLt0xvgR3MXMnKjHIbqPPCqZp46Wo92VFqwIaST5nQbnLTkLvoM8ouH6K6xjy9Y9NSSvwBxpttjfl3mVFpuMHtxMaKlxotYuHl1O8tQ6XoPMZv7qLcIAwv4ZOvs7IVbI9oKB416I4gO25Kcn1iSn1njpOcS7ujpHYlIjxZ0AWx8LOxN2euG1Qu5NqZApw+UKlLnAsw5xWirSYQN3nUugRXbpgwJKx374cdeKS03TyUgSfZu8gMj6fvyCyrMjqWITr68BZaYo3lasI/l28xbpBWZ4vLKU2STs1JqTft6VovBihuHwjmbI03B+B9dq0Y2vo3kjUnz4a4PIcPCbavw5kJLpp+C7Mb/QYr+EkdXJp9QGzBsvKzbUlK317KPP5NI8vX0R9iF44gQ+Uz6PBlcnWKfWNXx/QLIutYBsJHXk400UGLFsCz7Izgf/4VegzAZGy7i47wxn4ej1meIOx4lnfyM6PamAtlnXclP0tgUA3RxtYAl+i/W2OUcwvpy2HeV4+/mAiAgXB/oqJIcoI9ElNLbCLZ/Y859oiQC6niKSg/D/p4eHWnOpT5NqRx5NPXRrdHzTYe0T6yz3/+OpQajRJIjYxKsfWQqGwNWXGAGMMCzWrswJmaD3o6BoRzzqJbvs+GnbDNdIdjFVpbqw79d5buNBiMbGf+2Q+qLcdns2njQaKf7grVsfndnKhP1w/LrdWYV9FU5xF2UYX8jR9Wbk4qA/5Fv0H6tsS2glQPZjNJ675ckh64pWv4nUjWD4KL/JOg8uvJIhB/xeapvBNoG5hdeBvRyTK/aM+WP8rybj1hP6hAsu4BoSrBb9FcN6h+ElG+F8KWCejavg8XO5KisTiEOQUbfALXylcEuNs36V1bx5/A55dGiA8Chga81Ha8PzDttRkNVdkTNR8fiwaU2voBtRBxMjjl5+vdKABru9K30u8xuP69/6cn7fv2kCGO3KlB2aktTS6ihB5u12l3VJuSGhKE6ikh6+NRTyfSpLiGte08yhzdFsBX5LrTRGN9EUrGGFRl2U2NdP2lY3wZ4qRlUXJcc5UkYlvfb6JHcniuVMcrCEww1TBmq7aZDmX2xN1eZb0BOj0YGi8TFQBv5Wu/D/Gz+dU/bADNPVQZDsi5OTyxFcpW5yPnytOPvG0L3J24BOp9V2901S4CdJV+f4FvxrGy73Oh/Xjx5dRBJ6aLDN/rrquZhJjqVUaMBW/YNIs9VrgHtzuDdnSAYCwGfh24O6H7nui4AELqwl7UIFbTu6ZMi8DAA3FYo4JuRnUQYXa7F/vVfmklJa+KPrt3JqjI3OVNuP4W/JJL+3MKCM4zxqeXOUmpaI5Hb1mZpjCipoPrYYby4LI5vx+USGp8vsvkZgKqU9qPxphLCfAVr9ER6l5FEOZFZjcqxvhpWxvraDE8Xu2gh2xLXlCpMNiBJmpMla4iJjaAtMp4IEl2nEiWxi/dD+nFXOJcnwFj/ybI0xsGpm9AjBpYAIWSKVN/P4fcNU08hdTNj5AFL3k4yIhqGHroTPwe2sZHT/8UufEC92lqhDy4ObBBCJZsV2+No8EqZ0DTIQVS72efqIPV/BIJ+X8b4JAecPzizRQaA2cG2eUM1sWv337pBkfb93D1j8oe+FCmGufrq2MZrMs8POAPcw8PvqKfqXkBnF0yVg+igl/7wx5uthrw+scaOphcX7bkAKPzknpiZqzyXjcPhA4T9CvcqalT1Qr43lZQWHZIwfS5JjD5WUXuwWyAIkl1IN/fFQ1jW6blOGoQFe7L3JgqRmvcoA2AhJ25cPoW5Bf19mFpBXKuCsAnqyTk5Q0VVYyS+gqa7TjYPQnsH4I1wSCeUnN0lkgO9KEW1yU9Y6IifYGWeI1vdwr3XUlBh/uq182ZK8fZvb6WghkPjBGVtyk7m4JQ8b5+LdcuysszjdhBEXGZr83mub8oLSvsQq3CmmHEjLU2k6f7+S5szWbN/lkrb+RT45vspDnqdR1bh5zsFIJqQA34imZGcVuGRe5F2eekvaq87Wpgu5+b8Ly8ghmaJ0u6tl0DnkTN4Sd9dg+5Pc2KO3JzLNwOQvo5IzVDSU2BOe08CTi/J4IaPzh7Z6VfFqJ/+TOBiTy8lkrUvRvycYGBLIChQ+ACxUTYR23HbM0/DOkhk9rIwZlFo3qTsVB0QUyfc3eDehzg0wz4Q3m5jayIN30fsMFlQC1+PvfL/dpshe9w6cU7tasVmCIWMyU8mUpTANYl4GF2VBDUk/LPPKYpBrfB7gcotseShQhufnTnkBGcSjMd015clyoWdVrTfg7J04/x/ti1fr+uY6NARUOx/bsV677CgUhLX+B/EKUYBv6A6OKT67Zg8rEMcNmozc3tdx6iUDwSSy50LWsujxpVZezeCYSWqVKFmAl/pGcNmOjinmv3J/k/b5iqvmjEWw8UkwaxRhm7M2D0PbLNwib6V04EOLMDHloaeJg4j6c/GlI3CE286iazo9a1ZkDRd4H0Lf8cAUcrUpwkOKTzuQbdtvyFZU4aqPdyhG+10C4yOVDqCi+LNNH8cZDYkGk56uFdxwYZeETNMtGhN2ZBUJNCDXMdH/tddFBSqQi+KVMtQk73s+e+D2CAGtrY0QcDfr6BLI5isBYCerp8k47LuLjUCjWJnA4xpicIv9WV5Kc2+XDrsRhqifptLZadz00YladC7nImVx8An6VRtHQ5uMcIGXxJa5D/OudHrMHpvjy8Pa4jsbot2mHPhFvv6yujJG1+NR/e8cRu32rzf6l40//vIexVq/FBfSUtOi9Va9e2rPjLnjTwP4LzDl94NRa3xcICnsSCJxVoJUx3Bgut/+ZmQwCjoi0m1M80NTP843hNulvuSxoedVSv9PTjPkUQVdTnxHG+qRrkh5Ic4f7Bna3Gm4/Lt1gh1oFpF7BMgVqY/K07vdttCAeJfwZWlzp6n8kxo+9HszGrxfBIN19ZAtBZHRCj1vjIsT/7x+kizhvzzf/kZQgyKCR23fiDEUnUVWWHzWYRXmOd/niWxQisswVnqCjevBT6LqOTU5fFaEq9Er0G1cKUwdKALE0GJfQA/DbOYkQ1t+OWd6v6DeWLB1Rh/k2vpjFPpwXrKmXGRtKP3RLT0BEJCZhk5qC0q/WYc69vzPbHBqJ1whVD9TTd48wjWJCoVCd9qTFJmSozM6IRj42mIEQDsqWqYINTwCdQDLpnJ4pJe/3PwM7L3N2hyIyJCN697G3Z4Ed/ctSXW35gkuM8j3NRx3+QPu7jBLfzkepq/1d5bT3WxXazBtotAxGyoHD6Up9Bw+VxmUdI32arOC18622t2g7+FhqVGMWdQX/oZrFsaufnJzB7GQSpL/LiSdGeWtZuHHYqpZUl8BuWUfpx9w33MXSM7KYhiuxorGvmpNcIP2GPe7HeXQbE/OKOIWpV3RbYrbhlbROorMufLOd7ik0Hla4vM/6IA7DsWiGF5BtrXUCGQ2xNe6WLcaBgaXt+TCCNUgEwGdMWzetS06+EGkfL6xl/ShHiUjnISHexhsoAW2+MSIUdw3npdhHCNjYSG2kIaD+oahmzYEqCDNtmFSRj+zAa2qAMkSohYqenS1dOHGrOYhH627Zq8eBm/bH/4X1NcZCP/AzeQUK5y7aMwBHyluvAKRoDJJ7zg9yOJCkOV+phVekN9c2/unerZlkYhkbh79f/0uiZ+F9RgmLNc0WL656dP6uygWf8M8MsFoe8aKkBn+tWqSTO5wD9gJ1e5JMoZhcaQYcqDHYnm4lO+Yp2aQpzcFlqMn/iufa1eAod6dOdiqoOcaH3OpVnty4/EtwWratNfibRmD7D2qrl/6352NrJyeV/fI9z8+ezotDylhGLF5ETRUcOJu+juIsiq/rlB33eEgOPzqMz8lj4mGH22gRcKB9q1rlCxRQ8Y5pts+zXqpA0qZuQ9kUC5V+AWLgT8YjoiU2jK19kjH/lDvtlVwqv7PKVrybqZfsCLWDAerVJJanRA/ayvOWXhom3VWUMHj9Pxp1Hfa9+n0vgJMzegOvkiAWgDfnQxu59uUBgU3FN8JRJMwsaururvG74cNgxq/kcWv4Z3yYuwZFTTbsBjRt8h0Zk+oZs/YqaryqaZAmRfHPEwAlAVH+zwdL9qJQ5NLPe6+yQPzwOZi9VKw0wSzZ16bgzbDHdwa2UOFoBCXHhSqVy3fcDO8bh8xPkFuml4Px96/Q2PXqz7aHAIZ/ZAzzsK4ip4TOXkztCbCRCeCQrgZGaNf+akCP6B43Q9Gtl+eN4mIGLG1lKyQFNcYPQmMqVrJAACVe59zQ7j70AAAAAAAAAAAAA==",
        }
    ]
  };

  const prepareImageData = (imageData : AttachmentData, parentId : string): AttachmentData => {
    const records = imageData.records.map(record => ({
      ...record,
      parentId: parentId
    }));

    return {
      ...imageData,
      records,
    };
  }
  
  try {
    const data = await validateReCaptcha(captchaToken) 
    if(data.success) {
      const token = await fetchOAuth2Token();
      if (!token) {
        throw new Error("Failed to retrieve OAuth token");
      }

      const caseData : CaseData = await postContactUsData(token, contactUsData);
      const parentId = caseData?.id || "";
      const updatedImageData : AttachmentData = prepareImageData(imageData, parentId);
      const finalPayload = await postAttachmentData(token, updatedImageData);
      console.log("ContactUs:Post Attachment Data", finalPayload);
      res.status(200).json(caseData);
    } else {
      res.status(401).json(data);
    }

  } catch (error) {
    console.log("Error runs", error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}


