import{_ as l,r as o,o as u,c as i,a as n,b as a,w as t,F as r,d as s}from"./app.55b1b60c.js";const k={},b=n("h1",{id:"pyth",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pyth","aria-hidden":"true"},"#"),s(" Pyth")],-1),m=n("p",null,"Pyth ist ein Oracle, mit dem reale Finanz- und Kryptomarktdaten abgerufen werden. Pyth Oracle kann von On-Chain-Programmen zum Konsumieren von Daten f\xFCr eine Vielzahl von Anwendungsf\xE4llen verwendet werden.",-1),d=n("h2",{id:"verwendung-von-pyth-im-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#verwendung-von-pyth-im-client","aria-hidden":"true"},"#"),s(" Verwendung von Pyth im Client")],-1),h=s("Pyth stellt eine JavaScript/TypeScript-Bibliothek namens "),y=n("strong",null,"@pythnetwork/client",-1),_=s(" bereit. Diese Bibliothek kann zum Lesen von On-Chain-Pyth-Daten f\xFCr Off-Chain-Anwendungen verwendet werden, z. B. zum Anzeigen des Pyth-Preises auf einer Website. Erfahren Sie mehr dar\xFCber "),g={href:"https://www.npmjs.com/package/@pythnetwork/client",target:"_blank",rel:"noopener noreferrer"},f=s("hier"),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" web3 "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" pyth "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@pythnetwork/client"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"web3"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    web3`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clusterApiUrl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" pythConnection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"pyth"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PythConnection"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    pyth`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPythProgramKeyForCluster"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPriceChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"&&"),s(" price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": $"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \\xB1$"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": price currently unavailable. status is "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br")])],-1),v=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" pythConnection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"pyth"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"PythConnection"),n("span",{class:"token punctuation"},"("),s(`
  connection`),n("span",{class:"token punctuation"},","),s(`
  pyth`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPythProgramKeyForCluster"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"devnet"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"onPriceChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},"."),s("price "),n("span",{class:"token operator"},"&&"),s(" price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": $"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \\xB1$"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("confidence"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("product"),n("span",{class:"token punctuation"},"."),n("span",{class:"token builtin"},"symbol"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": price currently unavailable. status is "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("price"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

pythConnection`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),C=n("h2",{id:"verwendung-von-pyth-in-anchor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#verwendung-von-pyth-in-anchor","aria-hidden":"true"},"#"),s(" Verwendung von Pyth in Anchor")],-1),P=n("p",null,"Pyth stellt eine Rust Crate bereit, die von On-Chain-Programmen oder Off-Chain-Anwendungen verwendet werden kann, um die Daten von Pyth zu verbrauchen.",-1),x=n("div",{class:"language-rust ext-rs line-numbers-mode"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("anchor_lang"),n("span",{class:"token punctuation"},"::"),s("prelude"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token namespace"},[s("pyth_client"),n("span",{class:"token punctuation"},"::")]),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"self"),n("span",{class:"token punctuation"},","),s(" load_price"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Price"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token macro property"},"declare_id!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"6B7XgKFmo73geJY8ZboSpLhkTumvwXeCXBpeP7nCT35w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token attribute attr-name"},"#[program]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"mod"),s(),n("span",{class:"token module-declaration namespace"},"pyth_test"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"::"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"fn"),s(),n("span",{class:"token function-definition function"},"get_sol_price"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Context"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"SolPrice"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"->"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" pyth_price_info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ctx"),n("span",{class:"token punctuation"},"."),s("accounts"),n("span",{class:"token punctuation"},"."),s("pyth_account"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" pyth_price_data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("pyth_price_info"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"try_borrow_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" price_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Price"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"load_price"),n("span",{class:"token punctuation"},"("),s("pyth_price_data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price_account .. {:?}"'),n("span",{class:"token punctuation"},","),s(" pyth_price_info"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price_type ... {:?}"'),n("span",{class:"token punctuation"},","),s(" price_account"),n("span",{class:"token punctuation"},"."),s("ptype"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token macro property"},"msg!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price ........ {}"'),n("span",{class:"token punctuation"},","),s(" price_account"),n("span",{class:"token punctuation"},"."),s("agg"),n("span",{class:"token punctuation"},"."),s("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"Ok"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token attribute attr-name"},"#[derive(Accounts)]"),s(`
`),n("span",{class:"token keyword"},"pub"),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token type-definition class-name"},"SolPrice"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token attribute attr-name"},"#[account(mut)]"),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" user_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Signer"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" pyth_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"UncheckedAccount"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" system_program"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"UncheckedAccount"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token keyword"},"pub"),s(" rent"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Sysvar"),n("span",{class:"token operator"},"<"),n("span",{class:"token lifetime-annotation symbol"},"'info"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Rent"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br")])],-1),S=n("div",{class:"language-rust ext-rs line-numbers-mode"},[n("pre",{class:"language-rust"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" pyth_price_info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ctx"),n("span",{class:"token punctuation"},"."),s("accounts"),n("span",{class:"token punctuation"},"."),s("pyth_account"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" pyth_price_data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("pyth_price_info"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"try_borrow_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"let"),s(" price_account"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token class-name"},"Price"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"load_price"),n("span",{class:"token punctuation"},"("),s("pyth_price_data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unwrap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),$=n("h2",{id:"other-resources",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),s(" Other Resources")],-1),A={href:"https://docs.pyth.network/consumers/client-libraries",target:"_blank",rel:"noopener noreferrer"},B=s("Client Libraries"),O={href:"https://github.dev/solana-labs/solana/tree/master/web3.js/examples",target:"_blank",rel:"noopener noreferrer"},z=s("JS Example Code"),E={href:"https://github.com/project-serum/anchor/tree/master/tests/pyth",target:"_blank",rel:"noopener noreferrer"},F=s("Rust Example Code"),V={href:"https://github.com/0xPratik/pyth-anchor-example",target:"_blank",rel:"noopener noreferrer"},K=s("Anchor Example Code");function L(R,T){const e=o("ExternalLinkIcon"),c=o("SolanaCodeGroupItem"),p=o("SolanaCodeGroup");return u(),i(r,null,[b,m,d,n("p",null,[h,y,_,n("a",g,[f,a(e)])]),a(p,null,{default:t(()=>[a(c,{title:"TS",active:""},{default:t(()=>[w]),preview:t(()=>[v]),_:1})]),_:1}),C,P,a(p,null,{default:t(()=>[a(c,{title:"Anchor",active:""},{default:t(()=>[x]),preview:t(()=>[S]),_:1})]),_:1}),$,n("ul",null,[n("li",null,[n("a",A,[B,a(e)])]),n("li",null,[n("a",O,[z,a(e)])]),n("li",null,[n("a",E,[F,a(e)])]),n("li",null,[n("a",V,[K,a(e)])])])],64)}var D=l(k,[["render",L]]);export{D as default};