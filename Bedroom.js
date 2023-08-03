import React from 'react'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" >
      <img src="https://campaignme.com/wp-content/uploads/2022/01/HC-Brand-Jewel-English.jpg" alt="Bootstrap" width="150px" height="100px" />
    </a>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" ><Link to="/Home">Home</Link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Department
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" ><Link to="/Livingroom">Living Room</Link></a></li>
            <li><a class="dropdown-item" ><Link to="/Bedroom">Bed Room</Link></a></li>
            <li><a class="dropdown-item">Decor</a></li>
            <li><a class="dropdown-item" ><Link to="/Kitchen">Kitchen</Link></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Sales</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" >More</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Sign in/Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Cart</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
  </div>
</nav>
<hr></hr>
<h3>Bed Room</h3>
<div class="container text-center">
  <div class="row">
    <div class="col">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMa74iiBCK_-smawL4GUoUQBj5KOOIOeYjQ&usqp=CAU"/>
      <figcaption class="figure-caption">Beds</figcaption>
    </div>
    <div class="col">
      <img src="data:image/jpeg;base64,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"/>
      <figcaption class="figure-caption">Wardrobes</figcaption>
    </div>
    <div class="col">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyCAd8dCwnj-QMGWxHnk71_7pscs5c_PzcQ&usqp=CAU"/>
    <figcaption class="figure-caption">Curtains</figcaption>
    </div>
  </div>
  <div class="row">
  <div class="col">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3oFTrsFt5Ie_IwfZNqIc5au1631VhYBG2ckfyBZjOFb8I8pA2agGWXLOHSbD8FdUoiE&usqp=CAU"/>
  <figcaption class="figure-caption">Towels</figcaption>
    </div>
    <div class="col">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxf1WoOV3x1sWpB7D6G-Xp-TFiPbbnR9Ai-kkU1ZwhzAyzhOHLhT86WuN8yQqI5Bk1ERg&usqp=CAU"/>
    <figcaption class="figure-caption">Bath Accessories</figcaption>
    </div>
    <div class="col">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFhUVFRUVFRUXFhcXFRUVFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsZFRkrLS0tLSsrKy0tKysrKy0rKystLi0tLS0tNzctLSsrLSsrLSstNyswNysrKysrNzcrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEAQAAIBAgEHCQYEBQMFAAAAAAABAgMRIQQSMUFRYZEFBhNScYGh0fAUMkKSscEiU3LhFRZDYoIzstIHVHOD8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABwRAQEBAQEAAwEAAAAAAAAAAAARARJRAiExE//aAAwDAQACEQMRAD8A+lRQxICNSO0Lp4L4iBiRbaSu9CEe2Q1XZJ1lKLVtKaAfCpdJrQ0muxhqYilVtCMbe7FK+2y2BqqA3P3F5wtTW/gg1JbfAC7kziKS6xd49b6AVnF55eHW8UXddbxQAZ5TmMw63iis1bfEBbmC5jnDtAcO3iApyBzhriC4AKcgXLcNcAcwBbnuActw5wBcEAly3Aub2DXBAumtgUlzewpyewa6a2AumtiAS5PYVnPYMdNbFwBcFsXAAM57FxIFmLYiAZJVjP0rlJRWLBnIVyZlnRVs5q6v6sEdrJWvdeD+vYdB0GljoEPIE810VnXbu21hrvdvs8TynOLnxHJa0qFSlVzoYZ2baMl1o3tnR1X7SbuZ+rmbv49io67kw2nzp/8AUqi/hmu232Dp/wDULJ3hnWJ/T4rxr6GpIOEk/wD6eChz5yd/1ENjzwyd/wBWPEvfxTnXu5QAzDx8OeFD86PzDY88cn/Piv8AJDrCa9TKAOYeaXPPJv8AuI/Mi1z1ybXXp98kLnpNekUCsw80uemSfn0+KG0udeTPRUjxLc9Sa77TRI1ZbX67TjQ5wUXoqwv+pGujyjBxbz03i7J/QfQ6ccoesZGqnuOPk/KF3ZqxtjUT0O5RusC0Io1GaCAGCG0CwAkAxjAaABgsJgsKBgMNgMooohAORIzTp49pnfLEfjhUj2wb8Y3LjytRf9SPY2k+DM1I9nyDlMFTzG2n60PYFN3lJTUZxldaNCksVZ6t2485keVRfuyT7zq0axQb5nZHOEYyow/DrSs+xPTYRHmfk6VoxW9NKS8To08oa1jFXJM8LrhvmFkibcacUrvC11bvEz5iZJrpwvujbw0HpenYt1GOc8OtcCHMHJH/AE4/KXLmHka0048D0MKjRU5uWkc54da85DmTkb0Uo6dm/ePXMnJVpoxatoaT79x3IStoKqVmy854XXn1zGyP8mPBfUGrzAyK2NBdqsn4M73Sv1cZnt6RznhdebjzAyX4Iyj2Ta+4GWcx6Wbbp68bbJu3y3sz1FwZDnPDrXj6XN2vDChXc91RNadklp7B7Veg060FpspQbce+6TXA9VGVjBzlrQjklRzelJR2ud1mpd68GJPwtcnJuUKjrK2iT0fU9PCR4LIsouliek5I5RcpZstev7jNo7jQLQyKKaAS0A0NaBaAS0CxrFsKW0A0NYtoBdiBFlHLlRWwX/DIzwzU+41VXY6mRUsyEZz+LQiI88+aFGWLhFPalZ+Bsybmxme5Vqrdnya4NtHqIxj2aPHElkhzhXIpclzX9WTttUfI0Q5Pn11wOkyRYhXPWRT66+X9y1kU+svl/c6Gci1NCDD7FLr+CL9jfXfCPka3UW1Y2fEB5XBaZx169134AZ3kX98vDyI8h/ufh5DVl1PrxxtrWl6C3ltPrx4rzAR7B/cwXyf/AHS+Zmr2uGCzo46PVy1lUH8UfXfvAxPINk5cb/UjyGWqb4LyNjrxfxIuNZLG6aKOHyxOrQozrKPSdGk8xYNq6Td8cEm3o1HgeXOWqmWyi3HNhD3YKV8Xpk3ZXerdjtZ9IyzleosKdFyuveeCWz8Nrs8L/KlSLclK6vdq1mvsY+X218Yx5FGUbafBnc5MqPPTWp49mu5X8AnFRbur6b3Vn3G/kfIJJ4b087G2NniXMTdekyLKVUjdd49ozZBkkaatF329xqZpC2hbQxgsgU0BJDJC5BQMXIYxcmAJCiFGKpG6OzyPlF82lJJ4WWGOu55WOXVYe/Rl2xamvs/A6HJ/LdK6edmNdZOP+5IiOxyjybGM3+OrZu+FSaxto06LWLybkaD/ABZ1XFa6tT/ka48oUqtm3F/5Ie8pj1lxQmDB/AKV3723/UqadfxBLkWktvzzfZrNftEOsuJHXhtQmBK5Eo20Li/PtC/hFHqRw3DXlEQXlK2SfZGT+wmAKfJNH8uHyrRrXZhoD9gprRGPyruJ0+6fyy8gZV31Z/KwHezRSw+hUaVxPtEurLwX1YLrS6kuMfMo1dEiSpr163mN1pdSXGPmU60uo+MfMDVKmvXEGdFajK6suq/mj5k6aWzxXmBodNbPWwSopab2B6aW75n5Auq93F+QGnLqcakbJ204iMkyVQjbxBjW2h+1oB6aRTMzyncB7TbyuINDBZIVFJXRGiBbYDGNC5IAGKkNkhUkFDchLEA3rLY9Veu4NZZHqrj+xzFALNNsuosvWzx/Yt5cvT/Y5iiFmCDf7aX7aYM0maBu9vKeWmHNLsBqlloDywzyiXYBssqF+1MBokkAUsq9XFvK/V2KkgWgDeUveTp2LBcgGOswHUKzirgXnEz9wNyXANTQaSeoQpDcnliB0cmQ9kppWvoKlVj1lxRnVDIXIKVaPWjxQqVaPWjxRBTFyZbrR6y4oVKvHrLigqyA9NHrIgDrBWLSCSNshigki0gkgKsVYYkXmPYEJaJmjuiexl9E9gCLFND+hZHRYVnsCzS6JToAY5RAaNroL0wXRXpgYmgGjc6S3eILgt3ADFYpo2O3pAuS38QjI4vYVmvYanJemA5oBKg9g6jSdy12PjY0U4rf9fqFdChHAqSWwOjD8Pr7AMzqlyQuQyQuRAuQqTGSFSQAXIXYgHTVJbGEqa2eJaLNoigtiCUezgRNF56AJIgPSIrpAgmU2VjsZMxgU2A2H0ZWYgpbYEpDnmguSAQ2C0zQ5bgXfYBncGC6TNDjICS2yXEBDoguj2DW49bhj9AXKO993mAp01tIoLeMT2J+BPWkClHYhtOD3AJX1rwH0qXYBtpxw06hckOhHAVK+4zq4TJC5IbK+4VK+4ilSQuSGyuKlcALEKxIEdFU5bQlR2yYKr7nxL6b+3x/Y0hsacd4aiuqKdVqLlZbtOLZI1ZbuAo0X3IK73GbpJbfBBVZSzc5N4PFYaHrFDLvaC1vYu72viVbe+LFBuHaBhrRdOjdpCLKUnK2GhdiFU7PW7wKdZLWvAXKBdJpOz0PBrcxRJZQusC6qet+InMs3F6Yu3dqZHAUE3HZ67wJySV816UtWLepFZhWU+8o9VXfa/2+pKAdb+18SoVru1rb3J+RJIW0KBllbTalCzTs8bjIZTfRbhZlZUr5s/8ACXd7rfdddwuMcS0bFN3weHZjvNFGd3rw8b6DMomjJ4YriQb44YblrAmg5rHu8ymBnkJkaKkREiKTIVIdIVJALISxYGlMbEv2OWwbTyOWwqBrfDHZi/sQ0RyN+mGskAyjqUloehqz7xvshayQgxxWb+F6vEK5qlkV9ZPY7a/ADPOWbFvW8F92KhGysbnk+0tZMUYJIWzpvJEA8jQHNrq9pLSlZratTAUjqezIp5PHYBzlJadniJbxbelnW9njs+oPs0dgg48gTsyyeOwD2dbBByk8GmnZ7uDFwvosdnoVsXBF9GWDn0ux8DfksW8c18As17XxZV+3ixA9Xd21bHw0AtClIu4RdRYHFrcqxjJxlGaa0qy8zsiq9CM8JRT7VjxG4riS5Zh1Z8F5i5csU9kuC8wOVOTcy8oYx1rXHzRyJoyrrfxinslwXmWcUgH1BBHHXOOl1anyl/zFT6lTgvMtR2EWcb+Yqf5dTgvMv+Yqf5dTgvMUdgKxxf5ih+VU8PMn8xL8qfgKO3YjOJ/Ma/KnxQMuckfypcUKO1Ys4Uec8NdOS4MNc5aOvOXd+4o7TAZy1zkyfrvgxVXnLRWhTa25vmyjrMFnJ/mOjqU3/j+4upzhhqp1HwX3A67ZVzgy5x7KMvmQqXOWWqlxl+wo9E2Dc8zLnHU1QiuLEy5dranBf4N/cVHqWyrnkXy3Xf8AUS7Ka+4E+Va/5k+6MV9hR7Fgs8TPlCu/jq8bfRCpZZV1yrfPJfQVXuizwDyqet13/wCyY6nVbXuVX21ZeYo9w2Z6mVwXxxvsTu+CPLUKcn/Sh2yeczo0KclplGK2Qj9xRsy/KbQk7aVazdm08NHeeZkeiynJ4Sg0lja6k8XdbzzrZnQBCyEV2IQT+OQ1UI7WZnTcHbU9D+w+JUW8nW18Snk62viGEkAtZMtrK9nWqT9bx1Z2tHbp7CRQC50LK+LWvHR3FRhFmmnKwutTzXdaH4PWgA6FbAXk62DkWlcDBWyRPUZaUujebL3dT2du468o70ZsppqWGzSAHR20aNK/YNS1Nd/rQZFnUtWdDXHZvi9RphKMleLuvFPY1qKGKNgZIiqW04rxQxxwutACGirDGiRiADgrY6PWgXGC3hTd3uWC+7LATWptO+lbdnaSxohLbo1ozOObJx1aU93r6AC169evEG1vXr13hSni/etuTBjmSwU7PeAUNJopVL68DLNOKaenQt9xuTIDpXwOA2egt+F9j+hwZRJoXchM0hFd6cc6LWtYoXRldBwlYCrZPOj3ryKhyG04ichrxqRvZ+84rRjZXekfFYWWvXdXATe7b4dmr6BIBV1dxs7revM0RhfV4xABByjnRa1rFdq9Mipu/wC6NFPJ9jXEDFBZysXJPR3GyGSY3duInL5RpySdsbu+O7zAXFWTeOGOz6Gdxwbvd+92O+KT14D+ng1ZpW7yq0FbDU427Gr/AGAXKBjrZHZ50HZ/Xc9pscmU5FGSnXv+GSzZbNUv0v7BqTi8O/Y9wVanGStJGacpQ978Uet8S7esvHtA2RkpaNOzy2kbzU3w7TKmnZp4amvMPp87CfdLzX3AqEbFkkrAtgGDlULqL1xbKuFCpby1AZacs7ZnfFGWDvuGTpX0xx4rzXamSvSi7Ww3NZy7k8Y8S4waWFr7k1wuwFVndpbEvH14mjJ0ZIPTtvjfSbMnA6Evcl+l/Q4Ejvy9yX6X9DgNk0AWXYoiunnlTd8AVKyb2fXUBSbWLKhVKea8zqyb4+kb3JXutL04+K3mSpQTblfTbVst5APJ7u1yga7fSStu06dBooylbDgkzHUg1K93ue5YDZRli86V1i7N2aetEDpOr1ZDIV6sfhlxMypPrS+aXmHOjaN25bF+J+toHbyfLG0nKL8BPKdVOUHo/DbFYXu8DlqgrY3fextONsLuze17CiVKiVrW7FqNNWp+Ftf2eCl5ilBN2d+L8xMk4ycbvartu61etwD88mcKT9evXgRSAamLcr/YqtLBLb9F+4F8LgLlSs7xwb0x1S7tu8Dpbu1mn1Xp7VtW8bVe3+3uT0eJU6Sl+F4PVi7P9L0xYFQq23rZ91sYad8U+3au3zMNSbg7T0PRL7SWp79HYNz8brBgarluVldio1E9OD8H5Er6o97+wFLaEpAIu4EyqF1nrStO9an3fcZksiqMtT0PB9gFBOLzXq9XA6vwS/S/ocI7lP3X2P6HAciaLICQiuhU93vRUCENIMlH3n2kIQIqfB+mX1GR0L9EiEAuloXrUhlbRHt+yIQC1pCjpXd9iEKJHT63AZd70P0/chABiFH14kIANb3u7/kBW91+tpCAXlOr/wAUhf8ASp9q+qKIBXLGj/NfSJiyX/Tj3/7mQgDx2qP6V9yEAuPrwIvXAhAJD14jKvvrsX+5lkA35No7jgFkJoohCEV//9k="/>
    <figcaption class="figure-caption">Mattresses</figcaption>
    </div>
    <br></br>
<br></br>
<br></br>
<hr></hr>
<br></br>
<footer>
<div class="container text-center">
  <div class="row">
    <div class="col">
    <h4>✆Talk to us<br></br>1800-212-7500</h4>
    </div>
    <div class="col">
      <h4>🛈Help Centre<br></br>homecentre.in/help</h4>
    </div>
    <div class="col">
      <h4>✉Write to Us<br></br>help@homecentre.in</h4>
      </div>
      
  </div>
  <br></br>
</div>
</footer>
             <br></br>
             </div>
        </div>
  </div>
  )
}
