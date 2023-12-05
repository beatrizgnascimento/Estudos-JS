function addContact() {
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul') //lista -- adicionar campos para o contato (nome, end, tel)

  const nameLi = document.createElement('li') //item para armazenar nome do contato
  nameLi.innerText = "Nome: " 
  const nameInput = document.createElement('input') //campo para digitar o nome
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput) //elemento aparece na pagina
  ul.appendChild(nameLi) //salva na lista
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li') //item da lista para o telefone
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br')) //pular linha

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}