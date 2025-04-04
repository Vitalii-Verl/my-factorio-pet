class Blueprint {
  constructor(id, name, img, exportCopy){
    this.id = id,
    this.name = name,
    this.img = img,
    this.exportCopy = exportCopy
  }
}

let blueprints = []

blueprints.push(
  new Blueprint('automation-science-pack', 'Automation science pack', 'img/automation-science-pack.JPG', '0eNq1m91u2zgQhV9loWu5EH9FGdiLfY4gKBSHmwory15JbhsEefel5KROG6k5c7C+qamffCJnNGeGpPqU3bWneOybbsy2T1mzO3RDtr15yobmoavb6VxX72O2zerTeNjXY3PoNsOuid0ubo717p/sOc+a7j5+z7bq+TbPYjc2YxPPkPng8XN32t/FPt2Qv8L+rodxM/Z1NxwP/bi5i+2Y5dnxMDTTA6anJp5Rn1yePWZb98mlp9w3fdydL4fn/B1cy+DWSeCG7LlH4JaElwjckWaBeu5JONTz8gd8H++b034T23R73+w2x0MbF+xSvNBDoi/wAmnmCulsRcIDAleFkG7Wuq70El4al1qGF0amsTK8NDadDC+NTi/DC+PTlDK8MEJNkOFLIb6S4YUhawsZXhi0VonwWhi1VhZWWpHiC+mZZtMpJGhaGLP69b1RCsJLY7ZYxS+b3pFqj/I9qffv+XYJX5J6D+J/idrh2DbjmK4sgM/YAnJqReo81mtTkFkKxCtS50G8JrMUiDekzoN4S2YpEO9IncfUxngyS4G9l9bB9ic1WCIGMjHNgboErFjgSg/tL8F4ShPM/qE/pN+P8s+CmOTZ+HicWE13PI3Z0vMUm48MNMHTLF5D+Et0Nt0Q+2WtLVa7vJiD7CUm62GI+7u26R42+3r3peniRv8uS5wfkPDN8XcLB6+3fP73VKcMkf4y6w79vm4XPeSQMVrhGD2bUjC3l0if/SpzSQ1skLolXNUtFTBEW4iG6ApWriGvOMXioWB0GrGIWWUuWsSw+qqX9dVJg/sir/rnt6jp0/vzEOt+8+1LjK3s7XGO1UVo0c55Fm8hPL1ANXd/iRikRPsRkS6aIRP4gsVDDvRKWvp8ZGGv2eDHOmxYPGZui2iL0IWOL7Xceql1OI0rtZanoxJaNfYli8dWvIOo1vJQHeIrutbyV0jqZSGqtbAxloqVCmyzQLN4yO2lEZVyHsnqpaVLuat43YlKOWyIntVDzOkli8ecHlgpgZZYy4rFQ2usoRApFbboHBStVNUV3tmgRUoFjpHdUMLcHiyLx9zuREpVIWEcPK1UV/F6KVIqbIiBlRLM6exWE+b0qiClREMrnBW7PKahlf1KsxMpvbJ+WBl2IrVKZKMWtLBj8ZiFPTuRWrUHm3pBe7DhCNqDTb3aYN9r0PGoMb6S5Pb30OXt8EKzyV3rK8i8Kowku8OjpCMZ9D0dyqDvvSTBa2iBURUlm+Gv5PogSfHoINkkDHpesQvXoOcVnYYdxme3qbTF+KJ9qvedXvl4jd6oennC//zqKtFOFTxKdqsK9X3J8kHfB5FqOSigVUWr1lVcrwuRamGD1Ox+Feh5zS6Jg57Xhq7uy+XaU735vkta3q8i6aztMSvwFfjc5ds8+5YeMX1Wf1PmLnfpn9v8xkxtr+a2m8+HSzvNq+Z2eHPP1E6zo6k9ncrTzGBqT7e+np/bk9vmA/PmJjNfsOcDPx+cr8x3/7g0/75cS/1uxrhPw778P4M8a+tk1XTuZrr250rw3f7x12pUfo39MNvKeV3Zqko/pjLePD//B6Qp7Ow='),
  new Blueprint('logistic-science-pack', 'Logistic science pack', 'img/logistic-science-pack.JPG', '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'),
  new Blueprint('military-science-pack', 'Military science pack', 'img/military-science-pack.JPG', '')
)

function render(){
  const canvas = document.querySelector('#canvas')
  blueprints.forEach(blueprints => {
    canvas.innerHTML += `
      <div class="blueprint">
        <div class="blueprint__img" data-id="${blueprints.id}">
          <img src="${blueprints.img}" alt="${blueprints.name}">
        </div>
      </div>
    `
  });
}

render()

document.querySelectorAll('.blueprint').forEach(blueprint => {
  blueprint.addEventListener('click', e => {
    let dataId = e.target.closest('div').getAttribute('data-id')

    if(dataId){
      let obj = blueprints.find(item => {
        if(item.id === dataId) return true
      })

      let copyText = obj.exportCopy

      if(copyText){
        navigator.clipboard.writeText(copyText)

        alert("Схему додано до буферу")
      }
    }
  })
})
