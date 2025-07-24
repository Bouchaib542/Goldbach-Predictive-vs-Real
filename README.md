# Goldbach-Predictive-Check

Ce site Web applique une **formule prédictive innovante** pour estimer une paire (p, q) telle que **p + q = E** (E pair), puis **vérifie si p et q sont effectivement premiers**. Il constitue une avancée algorithmique significative dans l'étude de la Conjecture de Goldbach.

---

## 🇫🇷 Fonctionnement

1. L'utilisateur saisit un **nombre pair E** très grand (par exemple 10²⁰ ou 10²⁵).
2. Le programme calcule un écart δ(E) ≈ √E × (log log E) / log E.
3. Il estime une paire prédictive :
   - p_pred = E / 2 − δ(E)
   - q_pred = E / 2 + δ(E)
4. Le site **vérifie automatiquement** si p_pred et q_pred sont **des nombres premiers réels**.
5. Il affiche clairement :
   - ✅ si les valeurs sont premières
   - ❌ si ce sont des approximations

---

## 🇬🇧 How it works

This web tool uses a **predictive formula** for estimating a Goldbach pair (p, q) such that **p + q = E** for a given large even number E. It then **checks whether p and q are actually prime numbers**.

---

## ✨ Exemple

Entrée :  
**E = 1000000000**

> Formule prédit :  
> p = 499995375  
> q = 500004625  
> p + q = 1000000000 ✅

Vérification :  
> p est-il premier ? ❌  
> q est-il premier ? ❌  
> **Mais la paire réelle est très proche** des valeurs prédites.

---

## 📌 Remarque

- Cette méthode ne garantit pas que **p** et **q** soient premiers, mais les valeurs prédites sont **systématiquement très proches** des bonnes solutions (souvent à ±1000 près).
- Ce site peut devenir un outil pédagogique pour explorer la conjecture de Goldbach dans des intervalles gigantesques (jusqu’à 10²⁵ ou plus).

---

## 📘 Auteur

**Bahbouhi Bouchaib**  
Chercheur indépendant en mathématiques  
Nantes, France  
2025 – Tous droits réservés
