const SocialMediaHandles = {
  github: "fernandahiguti",
  instagram:"_fernandamh",
  twitter: "____fernandamh"
}

function ChangeSocialMediaHandles() {
 for (let li of SocialLinks.children){
      const social = li.getAttribute("class")
     li.children[0].href = `https://${social}.com/${SocialMediaHandles[social]}`
 }
  const social = GithubLink.getAttribute("class")               
  GithubLink.href = `https://${social}.com/${SocialMediaHandles[social]}`
}
ChangeSocialMediaHandles ()

function GetGithubProfileInfos () {
  const url =`https://api.github.com/users/${SocialMediaHandles.github}`
  fetch (url)
  .then(response => response.json())
  .then (data=>{
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    GithubLink.href = data.html_url
    UserAvatar.src = data.avatar_url
  })
}  

  GetGithubProfileInfos ()