export const MAIN_SITE = 'https://sabia.pub'

export const chapterRedirects = {
  "/9786583942401/a-oficina-tribiani-e-a-pintura-de-tabuletas-no-rio": "/read/9786583942401/a-oficina-tribiani-e-a-pintura-de-tabuletas-no-rio",
  "/9786583942401/apresentacao": "/read/9786583942401/apresentacao",
  "/9786583942401/as-folhas-velhas-da-vista-alegre-historia-impressa": "/read/9786583942401/as-folhas-velhas-da-vista-alegre-historia-impressa",
  "/9786583942401/batalha-das-cadeiras-disputas-legais-de-design-e-p": "/read/9786583942401/batalha-das-cadeiras-disputas-legais-de-design-e-p",
  "/9786583942401/cover": "/read/9786583942401/cover",
  "/9786583942401/das-artes-plasticas-ao-design-aloisio-magalhaes-e-": "/read/9786583942401/das-artes-plasticas-ao-design-aloisio-magalhaes-e",
  "/9786583942401/design-e-autonomia-da-virtualidade-do-campo-ao-pro": "/read/9786583942401/design-e-autonomia-da-virtualidade-do-campo-ao-pro",
  "/9786583942401/memoria-grafica-na-margem-ampliar-para-mapear-o-ci": "/read/9786583942401/memoria-grafica-na-margem-ampliar-para-mapear-o-ci",
  "/9786583942401/o-drama-e-a-era-do-projeto": "/read/9786583942401/o-drama-e-a-era-do-projeto",
  "/9786583942401/o-hiato-da-historia-das-artes-aplicadas-no-brasil": "/read/9786583942401/o-hiato-da-historia-das-artes-aplicadas-no-brasil",
  "/9786583942401/o-mam-rio-na-historia-do-design-brasileiro": "/read/9786583942401/o-mam-rio-na-historia-do-design-brasileiro",
  "/9786583942401/prefacio": "/read/9786583942401/prefacio",
  "/9786583942401/trajetorias-do-espaco-expositivo-moderno-confluenc": "/read/9786583942401/trajetorias-do-espaco-expositivo-moderno-confluenc",
  "/9786583942449/apresentacao": "/read/9786583942449/apresentacao",
  "/9786583942449/cover": "/read/9786583942449/cover",
  "/9786583942449/deliberal": "/read/9786583942449/deliberal",
  "/9786583942449/dragonetti": "/read/9786583942449/dragonetti",
  "/9786583942449/machado_e_costa": "/read/9786583942449/machado-e-costa",
  "/9786583942449/nelo": "/read/9786583942449/nelo",
  "/9786583942449/preto": "/read/9786583942449/preto",
  "/9786583942449/ribeiro": "/read/9786583942449/ribeiro",
  "/9786583942449/sellan": "/read/9786583942449/sellan",
  "/9786583942494/cover": "/read/9786583942494/cover",
  "/9786583942494/gusmao": "/read/9786583942494/gusmao",
  "/9786583942494/maciel": "/read/9786583942494/maciel",
  "/9786583942494/matos": "/read/9786583942494/matos",
  "/9786583942494/moreira": "/read/9786583942494/moreira",
  "/9786583942494/nascimento": "/read/9786583942494/nascimento",
  "/9786583942494/oliveira": "/read/9786583942494/oliveira",
  "/9786583942494/pinto-e-silva": "/read/9786583942494/pinto-e-silva",
  "/9786583942494/prefacio": "/read/9786583942494/prefacio",
  "/9786583942494/rossato": "/read/9786583942494/rossato",
  "/9786599492907/carta-a-primeira-edicao": "/read/9786599492907/carta-a-primeira-edicao",
  "/9786599492907/consideracoes-finais": "/read/9786599492907/consideracoes-finais",
  "/9786599492907/cover": "/read/9786599492907/cover",
  "/9786599492907/design-decolonial": "/read/9786599492907/design-decolonial",
  "/9786599492907/estudos-culturais": "/read/9786599492907/estudos-culturais",
  "/9786599492907/estudos-decoloniais": "/read/9786599492907/estudos-decoloniais",
  "/9786599492907/mas-afinal": "/read/9786599492907/mas-afinal",
  "/9786599492907/prefacio": "/read/9786599492907/prefacio",
  "/9786599492907/referencias": "/read/9786599492907/referencias",
  "/9786599492938/cover": "/en/read/9786599492938/cover",
  "/9786599492938/gratitudes": "/en/read/9786599492938/gratitudes",
  "/9786599492938/introduction": "/en/read/9786599492938/introduction",
  "/9786599492938/part-a": "/en/read/9786599492938/part-a",
  "/9786599492938/part-b": "/en/read/9786599492938/part-b",
  "/9786599492938/part-c": "/en/read/9786599492938/part-c",
  "/9786599492938/preface": "/en/read/9786599492938/preface",
  "/9786599492938/references": "/en/read/9786599492938/references"
}

export const bookFallbacks = {
  "9786583942401": "/read/9786583942401/cover",
  "9786583942449": "/read/9786583942449/cover",
  "9786583942494": "/read/9786583942494/cover",
  "9786599492907": "/read/9786599492907/cover",
  "9786599492938": "/en/read/9786599492938/cover"
}

export function resolveMainSitePath(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  if (chapterRedirects[normalized]) return chapterRedirects[normalized]

  const isbn = normalized.match(/^\/(97\d{11})(?:\/|$)/)?.[1]
  if (isbn && bookFallbacks[isbn]) return bookFallbacks[isbn]
  return '/'
}
