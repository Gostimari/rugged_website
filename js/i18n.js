// ============ I18N DICTIONARY ============
const I18N = {
    pt: {
        // Meta
        'meta.description': 'RUGGED — Desenvolvimento de tecnologia para sistemas terrestres não tripulados em ambientes extremos. Projeto FCT entre ADAI e ISR-UC.',
        // Nav
        'nav.descricao': 'Descrição',
        'nav.parceiros': 'Parceiros',
        'nav.documentacao': 'Documentação',
        'nav.noticias': 'Notícias',
        'nav.contactos': 'Contactos',
        'nav.openMenu': 'Abrir menu',
        'nav.closeMenu': 'Fechar menu',
        // Hero
        'hero.badge': 'Projeto FCT IC&DT 2024 · Coimbra',
        'hero.subtitle': 'Desenvolvimento de tecnologia para sistemas terrestres não tripulados em ambientes extremos',
        'hero.description': 'O projeto RUGGED visa desenvolver soluções de hardware e software que permitam o funcionamento autónomo de robôs terrestres em ambientes extremos — florestas densas, cenários de incêndio, poeira, fumo, vibrações intensas e temperaturas extremas.',
        'hero.btnProject': 'Conhecer o projeto',
        'hero.btnContact': 'Contactos',
        'hero.badgeForest': 'Robótica Florestal',
        'hero.badgeFire': 'Cenários de Incêndio',
        'hero.badgeDust': 'Poeira · Fumo · Calor',
        // Descrição
        'desc.tag': 'Descrição',
        'desc.title': 'O projeto RUGGED',
        'desc.subtitle': 'Uma abordagem multidisciplinar para tornar os sistemas terrestres não tripulados resilientes em ambientes extremos.',
        'desc.p1': 'A revolução no desenvolvimento de microprocessadores nas últimas décadas, aliada a uma redução sustancial dos seus custos, criou um ambiente ideal para o desenvolvimento de algoritmos avançados e inteligência artificial em diversos setores. Um exemplo notável é a mudança de paradigma nos sistemas móveis não tripulados que, desde as suas origens nos anos 50 em ambientes fabris, sofreram melhorias significativas em termos de dimensão, robustez e capacidades.',
        'desc.p2': 'Contudo, <strong>certos domínios — como a agricultura, a silvicultura, a construção civil e cenários de desastres naturais — colocam desafios significativos</strong> para o estabelecimento de uma base robusta para sistemas autónomos terrestres. Apesar dos progressos consideráveis em algoritmos de perceção, localização e navegação, impulsionados pela indústria dos transportes, <strong>existe uma escassez de conhecimento sobre o desempenho destes sistemas em condições adversas</strong>, para além dos ambientes estruturados e relativamente controlados de estradas e armazéns.',
        'desc.p3': 'O projeto RUGGED procura avançar soluções que facilitem a operação integrada de algoritmos de perceção, localização e navegação, juntamente com hardware crítico para sistemas não tripulados em ambientes exteriores desafiadores, como cenários agrícolas, florestais e de incêndio. Esta empreitada ambiciosa exige uma abordagem multidisciplinar, focada principalmente nos domínios da engenharia eletrotécnica e mecânica, com forte ênfase em <strong>testes de campo reais</strong>, utilizando maquinaria florestal real e sensores em ambientes operacionais.',
        'desc.kw1': 'Robótica Florestal',
        'desc.kw2': 'Sistemas Autónomos',
        'desc.kw3': 'Ambientes Extremos',
        'desc.kw4': 'Perceção Multisensorial',
        'desc.objTitle': 'Objetivos',
        // Carousel
        'carousel.prev': 'Anterior',
        'carousel.next': 'Seguinte',
        'carousel.dotAria': 'Ir para objetivo',
        // Objectives
        'obj.1.title': 'Diretrizes de Posicionamento',
        'obj.1.desc': 'Normas para a colocação ótima de hardware sensível em robôs móveis.',
        'obj.2.title': 'Filtragem de Ruído Mecânico',
        'obj.2.desc': 'Amortecimento de vibrações com sistemas ativos e passivos.',
        'obj.3.title': 'Gestão Térmica',
        'obj.3.desc': 'Blindagem térmica e arrefecimento passivo para hardware sensível.',
        'obj.4.title': 'Perceção Multisensorial',
        'obj.4.desc': 'RADAR 3D + sensores óticos redundantes para poeira e fumo.',
        'obj.5.title': 'Localização Multimodal',
        'obj.5.desc': 'Filtros não lineares (EKF / FGO) com GPS para navegação robusta.',
        'obj.6.title': 'Segmentação de Imagem',
        'obj.6.desc': 'Machine learning para discriminar troncos, copas, vegetação e fumo.',
        'obj.7.title': 'Mapa Métrico-Semântico',
        'obj.7.desc': 'Representação 3D do ambiente com informação semântica integrada.',
        'obj.8.title': 'Análise de Traversabilidade',
        'obj.8.desc': 'Identificação de áreas transitáveis para planeamento de movimento.',
        'obj.9.title': 'Ambientes Virtuais',
        'obj.9.desc': 'Ambientes com ruído para recolha de dados sintéticos e treino.',
        'obj.10.title': 'Datasets Multisensoriais',
        'obj.10.desc': 'Dados de veículos terrestres em ambientes extremos para a comunidade.',
        'obj.11.title': 'Protótipo de Robô Florestal',
        'obj.11.desc': 'Robô autónomo em escala real com as soluções de hardware e software.',
        'obj.12.title': 'Validação Operacional',
        'obj.12.desc': 'Métricas de desempenho do protótipo em contexto operacional real.',
        // Parceiros
        'partners.tag': 'Parceiros',
        'partners.adaiName': 'Associação para o Desenvolvimento da Aerodinâmica Industrial',
        'partners.adaiDesc': 'Instituição privada sem fins lucrativos criada em 1990 na Universidade de Coimbra e classificada como "Excelente" pela FCT. Conta com 128 investigadores em quatro áreas: Energia e Detónica, Incêndios Florestais, Ecologia Industrial e Sustentabilidade, com laboratórios em Coimbra e Leiria.',
        'partners.isrName': 'Instituto de Sistemas e Robótica da Universidade de Coimbra',
        'partners.isrDesc': 'Unidade de investigação fundada em 1992 e classificada como "Excelente" pela FCT — a única unidade nacional de Engenharia Eletrotécnica e de Computadores com esta distinção. Focada em robótica e sistemas inteligentes, com destaque para projetos em ambientes florestais como SEMFIRE, CORE e SAFEFOREST.',
        'partners.learnMore': 'Saber mais',
        'partners.adaiFullP1': 'A Associação para o Desenvolvimento da Aerodinâmica Industrial (ADAI) é uma instituição privada sem fins lucrativos e de utilidade pública, criada em 1990 no seio do Departamento de Engenharia Mecânica da Universidade de Coimbra. Desde 2006, integra o LAETA – Laboratório Associado de Energia, Transportes e Aeronáutica, classificado como "Excelente" pela FCT.',
        'partners.adaiFullP2': 'Com uma equipa de 128 investigadores, incluindo 31 doutorados, a ADAI desenvolve investigação em quatro grandes áreas: Energia e Detónica, Incêndios Florestais, Ecologia Industrial e Sustentabilidade, com laboratórios dedicados em Coimbra e Leiria.',
        'partners.adaiFullP3': 'O seu Field Tech Lab lidera projetos inovadores que cruzam tecnologia e gestão de incêndios, explorando soluções como UAVs e UGVs para deteção, monitorização e combate a incêndios, sistemas de apoio à decisão com inteligência artificial, e redes de sensores distribuídos, contribuindo ativamente para a proteção e resiliência do território.',
        'partners.isrFullP1': 'O Instituto de Sistemas e Robótica da Universidade de Coimbra (ISR-UC) é uma unidade de investigação sem fins lucrativos, fundada em 1992, e classificada como "Excelente" pela FCT. É a única unidade nacional de Engenharia Eletrotécnica e de Computadores com esta distinção.',
        'partners.isrFullP2': 'Focado em robótica e sistemas inteligentes, o ISR-UC desenvolve investigação de excelência com forte componente multidisciplinar e uma vasta experiência em projetos nacionais e europeus. Integra o Laboratório Associado ARISE e colabora regularmente com centros de excelência e parceiros industriais.',
        'partners.isrFullP3': 'Nos últimos anos, tem apostado na aplicação da robótica e da sensorização em ambientes florestais, com destaque para os projetos SEMFIRE, CORE e o projeto de grande escala SAFEFOREST, no âmbito do programa CMU Portugal.',
        'partners.consortium': 'O Consórcio RUGGED une duas instituições de investigação de excelência distinguidas com a classificação de Excelência na avaliação da FCT. A bagagem e perícia coletiva de ambas as equipas são ricamente multidisciplinares, oferecendo pontos fortes complementares que se cruzam em áreas cruciais. A perícia da equipa da ADAI em incêndios florestais, gestão florestal, dinâmica de fluidos e engenharia mecânica complementa na perfeição a perícia da equipa do ISR em robótica e fusão de sensores. Nomeadamente, estas equipas têm um histórico de colaboração bem-sucedida em vários projetos neste domínio. Ambas as equipas combinam a experiência e perícia de investigadores séniores com a disponibilidade de jovens investigadores. Os investigadores séniores das equipas são bem reconocidos nas suas áreas de perícia, com um extenso registo de publicações. O investigador principal (PI) do projeto tem dupla formação em engenharia mecânica e robótica, servindo como uma ponte vital entre as equipas da ADAI e do ISR, tendo trabalhado em ambas as instituições anteriormente.',
        // Documentação
        'docs.tag': 'Documentação',
        'docs.title': 'Documentação e Open Science',
        'docs.subtitle': 'Documentos do projeto e compromisso com a ciência aberta.',
        'docs.projectTitle': 'Documentação do Projeto',
        'docs.projectDesc': 'Relatórios, deliverables e documentos técnicos do projeto',
        'docs.searchPh': 'Pesquisar documentação...',
        'docs.placeholder': 'A documentação do projeto será disponibilizada nesta secção ao longo do desenvolvimento do RUGGED.',
        'docs.osDesc': 'Todos os resultados serão partilhados abertamente, seguindo os princípios da Open Science da UE.',
        'docs.os1Title': 'Open Methods',
        'docs.os1Desc': 'Métodos, dados e resultados partilhados abertamente via Zenodo, compreensíveis e reproduzíveis.',
        'docs.os2Title': 'Open Source',
        'docs.os2Desc': 'Código desenvolvido no RUGGED disponibilizado no GitHub sempre que possível.',
        'docs.os3Title': 'Open Data (FAIR)',
        'docs.os3Desc': 'Datasets no Zenodo com DOI, metadados ricos e licenças CC BY / CC 0.',
        'docs.os4Title': 'Open Access',
        'docs.os4Desc': 'Publicações em acesso aberto (gold OA) em journals IEEE, ICRA, IROS, RAS, JFR.',
        // Notícias
        'news.tag': 'Notícias',
        'news.title': 'Notícias e Publicações',
        'news.subtitle': 'Acompanhe os eventos do projeto e as publicações científicas da equipa RUGGED.',
        'news.subTitle': 'Notícias',
        'news.subDesc': 'Eventos e atualizações do projeto',
        'news.searchPh': 'Pesquisar notícias...',
        'news.cardCat': 'Marco · Início',
        'news.cardTitle': 'RUGGED arranca oficialmente em novembro de 2024',
        'news.cardExcerpt': 'O projeto RUGGED — Robust Uncrewed Ground technoloGy dEvelopment and Deployment — tem início oficial em novembro de 2024, com duração prevista de 36 meses em Coimbra.',
        'news.cardDate': 'Novembro 2024',
        'news.readMore': 'Ler mais',
        'news.fullP1': 'O projeto RUGGED — Robust Uncrewed Ground technoloGy dEvelopment and Deployment — arrancou oficialmente em novembro de 2024, marcando o início de uma empreitada ambiciosa de 36 meses sediada em Coimbra, Portugal.',
        'news.fullP2': 'Financiado pela Fundação para a Ciência e a Tecnologia (FCT) no âmbito do concurso IC&DT 2024, o projeto reúne duas instituições de excelência: a ADAI (Associação para o Desenvolvimento da Aerodinâmica Industrial) e o ISR-UC (Instituto de Sistemas e Robótica da Universidade de Coimbra).',
        'news.fullP3': 'O objetivo central do RUGGED é desenvolver soluções de hardware e software que permitam o funcionamento autónomo de robôs terrestres em ambientes extremos — florestas densas, cenários de incêndio, poeira, fumo, vibrações intensas e temperaturas extremas.',
        'news.fullP4': 'Ao longo dos 36 meses, a equipa multidisciplinar irá trabalhar em 12 objetivos científicos, desde diretrizes de posicionamento de hardware e gestão térmica, até à validação operacional de um protótipo de robô florestal em contexto real.',
        'news.fullP5': 'O projeto conta com um total de 57.87 ETIs e um consórcio que combina a experiência de investigadores séniores com a energia de jovens investigadores, reforçando a colaboração entre as áreas de engenharia mecânica, robótica e perceção artificial.',
        'news.noResults': 'Nenhuma notícia encontrada.',
        'news.pubsTitle': 'Publicações Científicas',
        'news.pubsDesc': 'Artigos científicos e capítulos de livro publicados pela equipa do projeto',
        'news.pubsSearchPh': 'Pesquisar publicações...',
        'news.filterAll': 'Todas',
        'news.filterJournal': 'Journals',
        'news.filterConf': 'Conferências',
        'news.pubsPlaceholder': 'Ao longo do projeto serão publicados artigos científicos e capítulos de livro, que serão disponibilizados nesta secção.',
        // Contactos
        'contact.tag': 'Contactos',
        'contact.title': 'Fale connosco',
        'contact.subtitle': 'Tem alguma questão sobre o projeto RUGGED? Entre em contacto com a nossa equipa.',
        'contact.emailLabel': 'Email',
        'contact.locationLabel': 'Localização',
        'contact.formName': 'Nome',
        'contact.formEmail': 'Email',
        'contact.formSubject': 'Assunto',
        'contact.formMessage': 'Mensagem',
        'contact.formNamePh': 'O seu nome',
        'contact.formEmailPh': 'O seu email',
        'contact.formSubjectPh': 'Assunto da mensagem',
        'contact.formMessagePh': 'Escreva a sua mensagem...',
        'contact.formSubmit': 'Enviar mensagem',
        'contact.formSending': 'A enviar...',
        'contact.formSent': 'Enviada!',
        'contact.formError': 'Erro',
        'contact.formSuccessMsg': 'Mensagem enviada com sucesso!',
        'contact.formErrorMsg': 'Erro ao enviar. Tente novamente.',
        'contact.formSubjectPrefix': '[RUGGED Website] Mensagem de contacto',
        // Footer
        'footer.fct': 'FCT — Fundação para a Ciência e a Tecnologia',
        'footer.contest': 'Concurso IC&DT 2024',
        'footer.dates': 'Nov 2024 — Out 2027',
        'footer.copyright': '© 2026 RUGGED Project. Todos os direitos reservados.',
        'footer.developed': 'Desenvolvido no âmbito do projeto FCT IC&DT 2024',
        // Misc
        'scroll.top': 'Voltar ao topo',
        'modal.close': 'Fechar',
        'modal.visitWebsite': 'Visitar website',
    },
    en: {
        // Meta
        'meta.description': 'RUGGED — Technology development for uncrewed ground systems in extreme environments. FCT project between ADAI and ISR-UC.',
        // Nav
        'nav.descricao': 'Description',
        'nav.parceiros': 'Partners',
        'nav.documentacao': 'Documentation',
        'nav.noticias': 'News',
        'nav.contactos': 'Contacts',
        'nav.openMenu': 'Open menu',
        'nav.closeMenu': 'Close menu',
        // Hero
        'hero.badge': 'FCT R&D Project 2024 · Coimbra',
        'hero.subtitle': 'Technology development for uncrewed ground systems in extreme environments',
        'hero.description': 'The RUGGED project aims to develop hardware and software solutions that enable the autonomous operation of ground robots in extreme environments — dense forests, fire scenarios, dust, smoke, intense vibrations and extreme temperatures.',
        'hero.btnProject': 'Discover the project',
        'hero.btnContact': 'Contact us',
        'hero.badgeForest': 'Forest Robotics',
        'hero.badgeFire': 'Fire Scenarios',
        'hero.badgeDust': 'Dust · Smoke · Heat',
        // Descrição
        'desc.tag': 'Description',
        'desc.title': 'The RUGGED project',
        'desc.subtitle': 'A multidisciplinary approach to making uncrewed ground systems resilient in extreme environments.',
        'desc.p1': 'The revolution in microprocessor development over the past decades, coupled with a substantial reduction in their costs, has created an ideal environment for the development of advanced algorithms and artificial intelligence in various sectors. A notable example is the paradigm shift in uncrewed mobile systems which, since their origins in the 1950s in factory environments, have undergone significant improvements in terms of size, robustness and capabilities.',
        'desc.p2': 'However, <strong>certain domains — such as agriculture, forestry, civil construction and natural disaster scenarios — pose significant challenges</strong> to establishing a robust foundation for autonomous ground systems. Despite considerable progress in perception, localisation and navigation algorithms, driven by the transport industry, <strong>there is a scarcity of knowledge about the performance of these systems in adverse conditions</strong>, beyond the structured and relatively controlled environments of roads and warehouses.',
        'desc.p3': 'The RUGGED project seeks to advance solutions that facilitate the integrated operation of perception, localisation and navigation algorithms, together with critical hardware for uncrewed systems in challenging outdoor environments, such as agricultural, forest and fire scenarios. This ambitious endeavour requires a multidisciplinary approach, focused mainly on the domains of electrical and mechanical engineering, with strong emphasis on <strong>real field testing</strong>, using real forestry machinery and sensors in operational environments.',
        'desc.kw1': 'Forest Robotics',
        'desc.kw2': 'Autonomous Systems',
        'desc.kw3': 'Extreme Environments',
        'desc.kw4': 'Multisensory Perception',
        'desc.objTitle': 'Objectives',
        // Carousel
        'carousel.prev': 'Previous',
        'carousel.next': 'Next',
        'carousel.dotAria': 'Go to objective',
        // Objectives
        'obj.1.title': 'Positioning Guidelines',
        'obj.1.desc': 'Guidelines for optimal placement of sensitive hardware on mobile robots.',
        'obj.2.title': 'Mechanical Noise Filtering',
        'obj.2.desc': 'Vibration damping with active and passive systems.',
        'obj.3.title': 'Thermal Management',
        'obj.3.desc': 'Thermal shielding and passive cooling for sensitive hardware.',
        'obj.4.title': 'Multisensory Perception',
        'obj.4.desc': '3D RADAR + redundant optical sensors for dust and smoke.',
        'obj.5.title': 'Multimodal Localisation',
        'obj.5.desc': 'Non-linear filters (EKF / FGO) with GPS for robust navigation.',
        'obj.6.title': 'Image Segmentation',
        'obj.6.desc': 'Machine learning to discriminate trunks, canopies, vegetation and smoke.',
        'obj.7.title': 'Metric-Semantic Map',
        'obj.7.desc': '3D representation of the environment with integrated semantic information.',
        'obj.8.title': 'Traversability Analysis',
        'obj.8.desc': 'Identification of traversable areas for motion planning.',
        'obj.9.title': 'Virtual Environments',
        'obj.9.desc': 'Noisy environments for synthetic data collection and training.',
        'obj.10.title': 'Multisensory Datasets',
        'obj.10.desc': 'Ground vehicle data in extreme environments for the community.',
        'obj.11.title': 'Forest Robot Prototype',
        'obj.11.desc': 'Full-scale autonomous robot with the hardware and software solutions.',
        'obj.12.title': 'Operational Validation',
        'obj.12.desc': 'Performance metrics of the prototype in a real operational context.',
        // Parceiros
        'partners.tag': 'Partners',
        'partners.adaiName': 'Association for the Development of Industrial Aerodynamics',
        'partners.adaiDesc': 'Private non-profit institution founded in 1990 at the University of Coimbra and rated "Excellent" by FCT. It has 128 researchers in four areas: Energy and Detonation, Forest Fires, Industrial Ecology and Sustainability, with laboratories in Coimbra and Leiria.',
        'partners.isrName': 'Institute of Systems and Robotics of the University of Coimbra',
        'partners.isrDesc': 'Research unit founded in 1992 and rated "Excellent" by FCT — the only national unit in Electrical and Computer Engineering with this distinction. Focused on robotics and intelligent systems, with emphasis on projects in forest environments such as SEMFIRE, CORE and SAFEFOREST.',
        'partners.learnMore': 'Learn more',
        'partners.adaiFullP1': 'The Association for the Development of Industrial Aerodynamics (ADAI) is a private non-profit institution of public utility, founded in 1990 within the Department of Mechanical Engineering of the University of Coimbra. Since 2006, it has been part of LAETA – Associated Laboratory for Energy, Transport and Aeronautics, rated "Excellent" by FCT.',
        'partners.adaiFullP2': 'With a team of 128 researchers, including 31 PhD holders, ADAI conducts research in four major areas: Energy and Detonation, Forest Fires, Industrial Ecology and Sustainability, with dedicated laboratories in Coimbra and Leiria.',
        'partners.adaiFullP3': 'Its Field Tech Lab leads innovative projects that bridge technology and fire management, exploring solutions such as UAVs and UGVs for fire detection, monitoring and suppression, decision support systems with artificial intelligence, and distributed sensor networks, actively contributing to the protection and resilience of the territory.',
        'partners.isrFullP1': 'The Institute of Systems and Robotics of the University of Coimbra (ISR-UC) is a non-profit research unit, founded in 1992, and rated "Excellent" by FCT. It is the only national unit in Electrical and Computer Engineering with this distinction.',
        'partners.isrFullP2': 'Focused on robotics and intelligent systems, ISR-UC conducts excellent research with a strong multidisciplinary component and extensive experience in national and European projects. It is part of the ARISE Associated Laboratory and regularly collaborates with centres of excellence and industrial partners.',
        'partners.isrFullP3': 'In recent years, it has focused on applying robotics and sensing in forest environments, with emphasis on the SEMFIRE, CORE and the large-scale SAFEFOREST projects, under the CMU Portugal programme.',
        'partners.consortium': 'The RUGGED Consortium unites two esteemed research institutions distinguished with Excellence in the FCT evaluation. The collective background and expertise of both teams are richly multidisciplinary, offering complementary strengths that intersect in crucial areas. The ADAI team\'s proficiency in wildfires, forest management, fluid dynamics, and mechanical engineering seamlessly complements the ISR team\'s prowess in robotics and sensor fusion. Notably, these teams have a history of successful collaboration on various projects in this domain. Both teams combine the experience and expertise of senior researchers with the availability of young researchers. The teams\' senior researchers are well recognized in their areas of expertise, with an extensive publication record. The principal investigator (PI) of the project holds a dual background in mechanical engineering and robotics, serving as a vital bridge between the ADAI and ISR teams, having worked within both institutions previously.',
        // Documentação
        'docs.tag': 'Documentation',
        'docs.title': 'Documentation and Open Science',
        'docs.subtitle': 'Project documents and commitment to open science.',
        'docs.projectTitle': 'Project Documentation',
        'docs.projectDesc': 'Reports, deliverables and technical documents of the project',
        'docs.searchPh': 'Search documentation...',
        'docs.placeholder': 'Project documentation will be made available in this section throughout the development of RUGGED.',
        'docs.osDesc': 'All results will be shared openly, following the EU Open Science principles.',
        'docs.os1Title': 'Open Methods',
        'docs.os1Desc': 'Methods, data and results shared openly via Zenodo, understandable and reproducible.',
        'docs.os2Title': 'Open Source',
        'docs.os2Desc': 'Code developed in RUGGED made available on GitHub whenever possible.',
        'docs.os3Title': 'Open Data (FAIR)',
        'docs.os3Desc': 'Datasets on Zenodo with DOI, rich metadata and CC BY / CC 0 licences.',
        'docs.os4Title': 'Open Access',
        'docs.os4Desc': 'Open access publications (gold OA) in IEEE, ICRA, IROS, RAS, JFR journals.',
        // Notícias
        'news.tag': 'News',
        'news.title': 'News and Publications',
        'news.subtitle': 'Follow project events and scientific publications from the RUGGED team.',
        'news.subTitle': 'News',
        'news.subDesc': 'Project events and updates',
        'news.searchPh': 'Search news...',
        'news.cardCat': 'Milestone · Kick-off',
        'news.cardTitle': 'RUGGED officially kicks off in November 2024',
        'news.cardExcerpt': 'The RUGGED project — Robust Uncrewed Ground technoloGy dEvelopment and Deployment — officially begins in November 2024, with an expected duration of 36 months in Coimbra.',
        'news.cardDate': 'November 2024',
        'news.readMore': 'Read more',
        'news.fullP1': 'The RUGGED project — Robust Uncrewed Ground technoloGy dEvelopment and Deployment — officially kicked off in November 2024, marking the beginning of an ambitious 36-month endeavour based in Coimbra, Portugal.',
        'news.fullP2': 'Funded by the Foundation for Science and Technology (FCT) under the R&D 2024 call, the project brings together two institutions of excellence: ADAI (Association for the Development of Industrial Aerodynamics) and ISR-UC (Institute of Systems and Robotics of the University of Coimbra).',
        'news.fullP3': 'The central goal of RUGGED is to develop hardware and software solutions that enable the autonomous operation of ground robots in extreme environments — dense forests, fire scenarios, dust, smoke, intense vibrations and extreme temperatures.',
        'news.fullP4': 'Over the 36 months, the multidisciplinary team will work on 12 scientific objectives, from hardware positioning guidelines and thermal management, to the operational validation of a forest robot prototype in a real context.',
        'news.fullP5': 'The project has a total of 57.87 FTEs and a consortium that combines the experience of senior researchers with the energy of young researchers, strengthening the collaboration between the areas of mechanical engineering, robotics and artificial perception.',
        'news.noResults': 'No news found.',
        'news.pubsTitle': 'Scientific Publications',
        'news.pubsDesc': 'Scientific articles and book chapters published by the project team',
        'news.pubsSearchPh': 'Search publications...',
        'news.filterAll': 'All',
        'news.filterJournal': 'Journals',
        'news.filterConf': 'Conferences',
        'news.pubsPlaceholder': 'Throughout the project, scientific articles and book chapters will be published and made available in this section.',
        // Contactos
        'contact.tag': 'Contacts',
        'contact.title': 'Get in touch',
        'contact.subtitle': 'Do you have any questions about the RUGGED project? Get in touch with our team.',
        'contact.emailLabel': 'Email',
        'contact.locationLabel': 'Location',
        'contact.formName': 'Name',
        'contact.formEmail': 'Email',
        'contact.formSubject': 'Subject',
        'contact.formMessage': 'Message',
        'contact.formNamePh': 'Your name',
        'contact.formEmailPh': 'Your email',
        'contact.formSubjectPh': 'Message subject',
        'contact.formMessagePh': 'Write your message...',
        'contact.formSubmit': 'Send message',
        'contact.formSending': 'Sending...',
        'contact.formSent': 'Sent!',
        'contact.formError': 'Error',
        'contact.formSuccessMsg': 'Message sent successfully!',
        'contact.formErrorMsg': 'Failed to send. Please try again.',
        'contact.formSubjectPrefix': '[RUGGED Website] Contact message',
        // Footer
        'footer.fct': 'FCT — Foundation for Science and Technology',
        'footer.contest': 'R&D Call 2024',
        'footer.dates': 'Nov 2024 — Oct 2027',
        'footer.copyright': '© 2026 RUGGED Project. All rights reserved.',
        'footer.developed': 'Developed under the FCT R&D Project 2024',
        // Misc
        'scroll.top': 'Back to top',
        'modal.close': 'Close',
        'modal.visitWebsite': 'Visit website',
    }
};

// Current language — read from localStorage or default to 'pt'
var currentLang = 'pt';
try { currentLang = localStorage.getItem('rugged-lang') || 'pt'; } catch(e) {}

// Override the fallback t() from script.js with the real implementation
t = function(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || (I18N['pt'] && I18N['pt'][key]) || key;
};

function setLanguage(lang) {
    currentLang = lang;
    try { localStorage.setItem('rugged-lang', lang); } catch(e) {}
    document.documentElement.lang = lang;

    // Update meta description
    var metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    // Swap text content for all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        el.innerHTML = t(key);
    });

    // Swap placeholder attributes for [data-i18n-ph]
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-ph');
        el.setAttribute('placeholder', t(key));
    });

    // Swap aria-label attributes for [data-i18n-aria]
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-aria');
        el.setAttribute('aria-label', t(key));
    });

    // Update carousel dot aria-labels
    document.querySelectorAll('.obj-dot').forEach(function(dot, i) {
        dot.setAttribute('aria-label', t('carousel.dotAria') + ' ' + (i + 1));
    });

    // Update form submit button if it's in default state
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn && !submitBtn.disabled) {
        var span = submitBtn.querySelector('span[data-i18n="contact.formSubmit"]');
        if (span) span.innerHTML = t('contact.formSubmit');
    }

    // Update hidden _subject input
    var subjectInput = document.querySelector('input[name="_subject"]');
    if (subjectInput) subjectInput.value = t('contact.formSubjectPrefix');

    // Sync all language switcher buttons
    document.querySelectorAll('.lang-switcher').forEach(function(switcher) {
        switcher.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    });
}

// Language switcher event listeners
document.querySelectorAll('.lang-switcher .lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var lang = btn.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
            setLanguage(lang);
        }
    });
});

// Apply saved language on load
try {
    setLanguage(currentLang);
} catch(e) {
    if (typeof console !== 'undefined') console.error('RUGGED i18n error:', e);
}
